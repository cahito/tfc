import { Router } from 'express';
import validateToken from '../middlewares/validateToken';
import MatchesController from '../controllers/MatchesController';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.list);
router.post('/', validateToken, matchesController.create);
router.patch('/:id/finish', matchesController.endGame);

export default router;
