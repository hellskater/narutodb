import { Request, Response } from 'express';
import { AkatsukiService } from '@services/akatsuki.service';

class AkatsukiController {
  private akatsukiService = new AkatsukiService();

  public getAll = (req: Request, res: Response) => {
    return this.akatsukiService.getAllAkatsukis(req, res);
  };

  public getById = (req: Request, res: Response) => {
    return this.akatsukiService.getAkatsukiById(req, res);
  };

  public getByName = (req: Request, res: Response) => {
    return this.akatsukiService.getAkatsukiByName(req, res);
  };
}

export default AkatsukiController;
