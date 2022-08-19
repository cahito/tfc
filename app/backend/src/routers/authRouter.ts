import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import AuthController from '../controllers/AuthController';

const router = Router();

router.post('/login', validateLogin, AuthController.login);

export default router;
