import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import TeamsService from '../services/TeamsService';

class TeamsController {
  list = async (_req: Request, res: Response): Promise<void> => {
    const teamsList = await TeamsService.list();

    res.status(StatusCodes.OK).json(teamsList);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const team = await TeamsService.getById(id);

    res.status(StatusCodes.OK).json(team);
  };
}

export default TeamsController;
