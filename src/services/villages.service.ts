import fs from 'fs';
import { Response } from 'express';

export class VillagesService {
  public villages = JSON.parse(fs.readFileSync(require.resolve('../data/villages.json'), 'utf8'));

  public getAllVillages(req: any, res: Response) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 20;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const villagesToReturn = this.villages.slice(startIndex, endIndex);

    return res.json({
      villages: villagesToReturn,
      currentPage: page,
      pageSize: limit,
      totalVillages: this.villages.length,
    });
  }

  public getVillageById(req: any, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send(`Id parameter is required`);
    }

    const village = this.villages.find(char => char.id == id);
    if (!village) {
      return res.status(404).send(`Village with id '${id}' not found`);
    }
    return res.json(village);
  }

  public getVillageByName(req: any, res: Response) {
    const name = req.query.name;

    if (!name) {
      return res.status(400).send(`Name query parameter is required`);
    }

    const village = this.villages.find(char => char.name.toLowerCase() === name.toLowerCase());
    if (!village) {
      return res.status(404).send(`Village with name '${name}' not found`);
    }
    return res.json(village);
  }
}
