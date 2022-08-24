import { Router } from 'express';
import validateToken from '../middlewares/validateToken';
import MatchesController from '../controllers/MatchesController';
import validateNotSameTeam from '../middlewares/validateNotSameTeam';
import validateTeamsExist from '../middlewares/validateTeamsExist';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.list);
router.post(
  '/',
  validateToken,
  validateNotSameTeam,
  validateTeamsExist,
  matchesController.create,
);
router.patch('/:id/finish', matchesController.endGame);

export default router;
