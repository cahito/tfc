import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';

const router = Router();
const matchesController = new MatchesController();

router.get('/matches', matchesController.list);
// router.get('/matches/:id', matchesController.getById);

export default router;
