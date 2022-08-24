import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import MatchesService from '../services/MatchesService';

class MatchesController {
  list = async (req: Request, res: Response): Promise<void> => {
    const { inProgress } = req.query;
    const matchesList = await MatchesService.list(inProgress);

    res.status(StatusCodes.OK).json(matchesList);
  };

  /* getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const match = await MatchesService.getById(id);

    res.status(StatusCodes.OK).json(match);
  }; */
}

export default MatchesController;
