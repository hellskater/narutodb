import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import KekkeiGenkaiController from '@/controllers/kekkeigenkai.controller';

class KekkeiGenkaiRoute implements Routes {
  public router = Router();
  public kekkeiGenkaiController = new KekkeiGenkaiController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/kekkei-genkai', this.kekkeiGenkaiController.getAll);
    this.router.get('/kekkei-genkai/search', this.kekkeiGenkaiController.getByName);
    this.router.get('/kekkei-genkai/:id', this.kekkeiGenkaiController.getById);
  }
}

export default KekkeiGenkaiRoute;
