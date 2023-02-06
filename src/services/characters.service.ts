import fs from 'fs';
import { Response } from 'express';
import { charactersList } from '@/data/characters';

export class CharacterService {
  public characters = charactersList;

  public getAllCharacters(req: any, res: Response) {
    return res.json(this.characters);
  }

  public getCharacterByName(req: any, res: Response) {
    const name = req.params.name;
    const character = this.characters.find(char => char.name === name);
    if (!character) {
      return res.status(404).send(`Character with name '${name}' not found`);
    }
    return res.json(character);
  }
}
