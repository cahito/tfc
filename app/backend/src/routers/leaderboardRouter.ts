import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';
// import validateToken from '../middlewares/validateToken';
// import validateNotSameTeam from '../middlewares/validateNotSameTeam';
// import validateTeamsExist from '../middlewares/validateTeamsExist';

const router = Router();
const leaderboardController = new LeaderboardController();

router.get('/home', leaderboardController.endedHome);
router.get('/away', leaderboardController.endedAway);
/* router.post(
  '/',
  validateToken,
  validateNotSameTeam,
  validateTeamsExist,
  matchesController.create,
);
router.patch('/:id/finish', matchesController.endGame);
router.patch('/:id', matchesController.updateScore); */

export default router;
