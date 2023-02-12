import { Request, Response } from 'express';
import { TailedBeastsService } from '@/services/tailedbeasts.service';

class TailedBeastsController {
  private tailedBeastsService = new TailedBeastsService();

  public getAll = (req: Request, res: Response) => {
    return this.tailedBeastsService.getAllTailedBeasts(req, res);
  };

  public getById = (req: Request, res: Response) => {
    return this.tailedBeastsService.getTailedBeastById(req, res);
  };

  public getByName = (req: Request, res: Response) => {
    return this.tailedBeastsService.getTailedBeastByName(req, res);
  };
}

export default TailedBeastsController;
