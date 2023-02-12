import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import KaraController from '@/controllers/kara.controller';

class KaraRoute implements Routes {
  public router = Router();
  public karaController = new KaraController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/kara', this.karaController.getAll);
    this.router.get('/kara/search', this.karaController.getByName);
    this.router.get('/kara/:id', this.karaController.getById);
  }
}

export default KaraRoute;
