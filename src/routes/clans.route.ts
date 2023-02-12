import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import ClansController from '@/controllers/clans.controller';

class ClansRoute implements Routes {
  public router = Router();
  public clansController = new ClansController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/clan', this.clansController.getAll);
    this.router.get('/clan/search', this.clansController.getByName);
    this.router.get('/clan/:id', this.clansController.getById);
  }
}

export default ClansRoute;
