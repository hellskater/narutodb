import { Request, Response } from 'express';
import { KekkeiGenkaiService } from '@/services/kekkeigenkai.service';

class KekkeiGenkaiController {
  private kekkeiGenkaiService = new KekkeiGenkaiService();

  public getAll = (req: Request, res: Response) => {
    return this.kekkeiGenkaiService.getAllKekkeiGenkai(req, res);
  };

  public getById = (req: Request, res: Response) => {
    return this.kekkeiGenkaiService.getKekkeiGenkaiById(req, res);
  };

  public getByName = (req: Request, res: Response) => {
    return this.kekkeiGenkaiService.getKekkeiGenkaiByName(req, res);
  };
}

export default KekkeiGenkaiController;
