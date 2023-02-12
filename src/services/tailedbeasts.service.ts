import fs from 'fs';
import { Response } from 'express';

export class TailedBeastsService {
  public tailedBeasts = JSON.parse(fs.readFileSync(require.resolve('../data/tailedbeasts.json'), 'utf8'));

  public getAllTailedBeasts(req: any, res: Response) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 20;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const tailedBeastsToReturn = this.tailedBeasts.slice(startIndex, endIndex);

    return res.json({
      tailedBeasts: tailedBeastsToReturn,
      currentPage: page,
      pageSize: limit,
      totalTailedBeasts: this.tailedBeasts.length,
    });
  }

  public getTailedBeastById(req: any, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send(`Id parameter is required`);
    }

    const tailedBeast = this.tailedBeasts.find(char => char.id == id);
    if (!tailedBeast) {
      return res.status(404).send(`Tailed Beast with id '${id}' not found`);
    }
    return res.json(tailedBeast);
  }

  public getTailedBeastByName(req: any, res: Response) {
    const name = req.query.name;

    if (!name) {
      return res.status(400).send(`Name query parameter is required`);
    }

    const tailedBeast = this.tailedBeasts.find(char => char.name.toLowerCase() === name.toLowerCase());
    if (!tailedBeast) {
      return res.status(404).send(`Tailed Beast with name '${name}' not found`);
    }
    return res.json(tailedBeast);
  }
}
