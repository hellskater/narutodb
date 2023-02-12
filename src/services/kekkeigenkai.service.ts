import fs from 'fs';
import { Response } from 'express';

export class KekkeiGenkaiService {
  public kekkeigenkai = JSON.parse(fs.readFileSync(require.resolve('../data/kekkeiGenkai.json'), 'utf8'));

  public getAllKekkeiGenkai(req: any, res: Response) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 20;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const kekkeigenkaiToReturn = this.kekkeigenkai.slice(startIndex, endIndex);

    return res.json({
      kekkeigenkai: kekkeigenkaiToReturn,
      currentPage: page,
      pageSize: limit,
      totalKekkeiGenkai: this.kekkeigenkai.length,
    });
  }

  public getKekkeiGenkaiById(req: any, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send(`Id parameter is required`);
    }

    const kekkeigenkai = this.kekkeigenkai.find(char => char.id == id);
    if (!kekkeigenkai) {
      return res.status(404).send(`Kekkei Genkai with id '${id}' not found`);
    }
    return res.json(kekkeigenkai);
  }

  public getKekkeiGenkaiByName(req: any, res: Response) {
    const name = req.query.name;

    if (!name) {
      return res.status(400).send(`Name query parameter is required`);
    }

    const kekkeigenkai = this.kekkeigenkai.find(char => char.name.toLowerCase() === name.toLowerCase());
    if (!kekkeigenkai) {
      return res.status(404).send(`Kekkei Genkai with name '${name}' not found`);
    }
    return res.json(kekkeigenkai);
  }
}
