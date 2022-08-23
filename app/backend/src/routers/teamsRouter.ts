import { Router } from 'express';
import TeamsController from '../controllers/TeamsController';

const router = Router();
const teamsController = new TeamsController();

router.get('/teams', teamsController.list);

export default router;
