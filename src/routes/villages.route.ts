import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import VillagesController from '@/controllers/villages.controller';

class VillagesRoute implements Routes {
  public router = Router();
  public villagesController = new VillagesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/village', this.villagesController.getAll);
    this.router.get('/village/search', this.villagesController.getByName);
    this.router.get('/village/:id', this.villagesController.getById);
  }
}

export default VillagesRoute;
