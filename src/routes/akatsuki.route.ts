import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import AkatsukiController from '@/controllers/akatsuki.controller';

class AkatsukiRoute implements Routes {
  public router = Router();
  public akatsukiController = new AkatsukiController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/akatsuki', this.akatsukiController.getAll);
    this.router.get('/akatsuki/search', this.akatsukiController.getByName);
    this.router.get('/akatsuki/:id', this.akatsukiController.getById);
  }
}

export default AkatsukiRoute;
