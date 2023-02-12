import { Request, Response } from 'express';
import { TeamsService } from '@/services/teams.service';

class TeamsController {
  private teamsService = new TeamsService();

  public getAll = (req: Request, res: Response) => {
    return this.teamsService.getAllTeams(req, res);
  };

  public getById = (req: Request, res: Response) => {
    return this.teamsService.getTeamById(req, res);
  };

  public getByName = (req: Request, res: Response) => {
    return this.teamsService.getTeamByName(req, res);
  };
}

export default TeamsController;
