import { Request, Response } from 'express';
import { CharacterService } from '@services/characters.service';

class CharacterController {
  private characterService = new CharacterService();

  public getAll = (req: Request, res: Response) => {
    return this.characterService.getAllCharacters(req, res);
  };

  public getById = (req: Request, res: Response) => {
    return this.characterService.getCharacterById(req, res);
  };

  public getByName = (req: Request, res: Response) => {
    return this.characterService.getCharacterByName(req, res);
  };
}

export default CharacterController;
