import fs from 'fs';
import { Response } from 'express';

export class CharacterService {
  public characters = JSON.parse(fs.readFileSync(require.resolve('../data/characters.json'), 'utf8'));

  public getAllCharacters(req: any, res: Response) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 20;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const charactersToReturn = this.characters.slice(startIndex, endIndex);

    return res.json({
      characters: charactersToReturn,
      currentPage: page,
      pageSize: limit,
      totalCharacters: this.characters.length,
    });
  }

  public getCharacterById(req: any, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send(`Id parameter is required`);
    }

    const character = this.characters.find(char => char.id == id);
    if (!character) {
      return res.status(404).send(`Character with id '${id}' not found`);
    }
    return res.json(character);
  }

  public getCharacterByName(req: any, res: Response) {
    const name = req.query.name;

    if (!name) {
      return res.status(400).send(`Name query parameter is required`);
    }

    const character = this.characters.find(char => char.name.toLowerCase() === name.toLowerCase());
    if (!character) {
      return res.status(404).send(`Character with name '${name}' not found`);
    }
    return res.json(character);
  }
}
