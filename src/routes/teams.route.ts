import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import TeamsController from '@/controllers/teams.controller';

class TeamsRoute implements Routes {
  public router = Router();
  public teamsController = new TeamsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/team', this.teamsController.getAll);
    this.router.get('/team/search', this.teamsController.getByName);
    this.router.get('/team/:id', this.teamsController.getById);
  }
}

export default TeamsRoute;
