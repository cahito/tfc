import { Router } from 'express';
import validateToken from '../middlewares/validateToken';
import MatchesController from '../controllers/MatchesController';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.list);
router.post('/', validateToken, matchesController.create);
// router.get('/matches/:id', matchesController.getById);

export default router;
