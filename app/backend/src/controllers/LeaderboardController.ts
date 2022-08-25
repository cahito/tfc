import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LeaderboardService from '../services/LeaderboardService';

class LeaderboardController {
  endedHome = async (req: Request, res: Response): Promise<void> => {
    const homeEndedBoard = await LeaderboardService.endedHome();

    res.status(StatusCodes.OK).json(homeEndedBoard);
  };
}

export default LeaderboardController;
