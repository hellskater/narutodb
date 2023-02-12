import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import TailedBeastsController from '@/controllers/tailedbeasts.controller';

class TailedBeastsRoute implements Routes {
  public router = Router();
  public tailedBeastsController = new TailedBeastsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/tailed-beast', this.tailedBeastsController.getAll);
    this.router.get('/tailed-beast/search', this.tailedBeastsController.getByName);
    this.router.get('/tailed-beast/:id', this.tailedBeastsController.getById);
  }
}

export default TailedBeastsRoute;
