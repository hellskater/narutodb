import { Request, Response } from 'express';
import { VillagesService } from '@/services/villages.service';

class VillagesController {
  private villagesService = new VillagesService();

  public getAll = (req: Request, res: Response) => {
    return this.villagesService.getAllVillages(req, res);
  };

  public getById = (req: Request, res: Response) => {
    return this.villagesService.getVillageById(req, res);
  };

  public getByName = (req: Request, res: Response) => {
    return this.villagesService.getVillageByName(req, res);
  };
}

export default VillagesController;
