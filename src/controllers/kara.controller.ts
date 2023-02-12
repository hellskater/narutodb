import { Request, Response } from 'express';
import { KaraService } from '@services/kara.service';

class KaraController {
  private karaService = new KaraService();

  public getAll = (req: Request, res: Response) => {
    return this.karaService.getAllKara(req, res);
  };

  public getById = (req: Request, res: Response) => {
    return this.karaService.getKaraById(req, res);
  };

  public getByName = (req: Request, res: Response) => {
    return this.karaService.getKaraByName(req, res);
  };
}

export default KaraController;
