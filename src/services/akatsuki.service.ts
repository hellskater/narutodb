import fs from 'fs';
import { Response } from 'express';

export class AkatsukiService {
  public akatsukis = JSON.parse(fs.readFileSync(require.resolve('../data/akatsuki.json'), 'utf8'));

  public getAllAkatsukis(req: any, res: Response) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const akatsukisToReturn = this.akatsukis.slice(startIndex, endIndex);

    return res.json({
      akatsuki: akatsukisToReturn,
      currentPage: page,
      pageSize: limit,
      totalMembers: this.akatsukis.length,
    });
  }

  public getAkatsukiById(req: any, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send(`Id parameter is required`);
    }

    const akatsuki = this.akatsukis.find(akatsuki => akatsuki.id == id);
    if (!akatsuki) {
      return res.status(404).send(`Akatsuki member with id '${id}' not found`);
    }
    return res.json(akatsuki);
  }

  public getAkatsukiByName(req: any, res: Response) {
    const name = req.query.name;

    if (!name) {
      return res.status(400).send(`Name query parameter is required`);
    }

    const akatsuki = this.akatsukis.find(akatsuki => akatsuki.name.toLowerCase() === name.toLowerCase());
    if (!akatsuki) {
      return res.status(404).send(`Character with name '${name}' not found`);
    }
    return res.json(akatsuki);
  }
}
