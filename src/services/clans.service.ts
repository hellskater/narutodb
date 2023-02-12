import fs from 'fs';
import { Response } from 'express';

export class ClansService {
  public clans = JSON.parse(fs.readFileSync(require.resolve('../data/clans.json'), 'utf8'));

  public getAllClans(req: any, res: Response) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const clansToReturn = this.clans.slice(startIndex, endIndex);

    return res.json({
      clans: clansToReturn,
      currentPage: page,
      pageSize: limit,
      totalClans: this.clans.length,
    });
  }

  public getClanById(req: any, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send(`Id parameter is required`);
    }

    const clan = this.clans.find(clan => clan.id == id);
    if (!clan) {
      return res.status(404).send(`Clan with id '${id}' not found`);
    }
    return res.json(clan);
  }

  public getClanByName(req: any, res: Response) {
    const name = req.query.name;

    if (!name) {
      return res.status(400).send(`Name query parameter is required`);
    }

    const clan = this.clans.find(clan => clan.name.toLowerCase() === name.toLowerCase());
    if (!clan) {
      return res.status(404).send(`Character with name '${name}' not found`);
    }
    return res.json(clan);
  }
}
