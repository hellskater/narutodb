import fs from 'fs';
import { Response } from 'express';

export class KaraService {
  public kara = JSON.parse(fs.readFileSync(require.resolve('../data/kara.json'), 'utf8'));

  public getAllKara(req: any, res: Response) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 20;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const karaToReturn = this.kara.slice(startIndex, endIndex);

    return res.json({
      kara: karaToReturn,
      currentPage: page,
      pageSize: limit,
      totalKara: this.kara.length,
    });
  }

  public getKaraById(req: any, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send(`Id parameter is required`);
    }

    const kara = this.kara.find(char => char.id == id);
    if (!kara) {
      return res.status(404).send(`Kara with id '${id}' not found`);
    }
    return res.json(kara);
  }

  public getKaraByName(req: any, res: Response) {
    const name = req.query.name;

    if (!name) {
      return res.status(400).send(`Name query parameter is required`);
    }

    const kara = this.kara.find(char => char.name.toLowerCase() === name.toLowerCase());
    if (!kara) {
      return res.status(404).send(`Kara with name '${name}' not found`);
    }
    return res.json(kara);
  }
}
