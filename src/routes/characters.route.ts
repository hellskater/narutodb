import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import CharacterController from '@/controllers/characters.controller';

class CharactersRoute implements Routes {
  public router = Router();
  public characterController = new CharacterController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/character', this.characterController.getAll);
    this.router.get('/character/search', this.characterController.getByName);
    this.router.get('/character/:id', this.characterController.getById);
  }
}

export default CharactersRoute;
