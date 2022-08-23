import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import TeamsService from '../services/TeamsService';

class TeamsController {
  list = async (_req: Request, res: Response): Promise<void> => {
    const teamsList = await TeamsService.list();

    res.status(StatusCodes.OK).json(teamsList);
  };
}

export default TeamsController;
