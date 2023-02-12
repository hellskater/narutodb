import { Request, Response } from 'express';
import { ClansService } from '@services/clans.service';

class ClansController {
  private clansService = new ClansService();

  public getAll = (req: Request, res: Response) => {
    return this.clansService.getAllClans(req, res);
  };

  public getById = (req: Request, res: Response) => {
    return this.clansService.getClanById(req, res);
  };

  public getByName = (req: Request, res: Response) => {
    return this.clansService.getClanByName(req, res);
  };
}

export default ClansController;
