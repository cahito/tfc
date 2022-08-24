import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import MatchesService from '../services/MatchesService';

class MatchesController {
  list = async (req: Request, res: Response): Promise<void> => {
    const { inProgress } = req.query;
    const matchesList = await MatchesService.list(inProgress);

    res.status(StatusCodes.OK).json(matchesList);
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const payload = req.body;
    const match = await MatchesService.create(payload);

    res.status(StatusCodes.CREATED).json(match);
  };

  endGame = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const finished = await MatchesService.endGame(id);

    res.status(StatusCodes.OK).json({ message: finished });
  };
}

export default MatchesController;
