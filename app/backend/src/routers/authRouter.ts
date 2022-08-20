import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import validateLoginUser from '../middlewares/validateLoginUser';
import AuthController from '../controllers/AuthController';

const router = Router();

router.post('/login', validateLogin, validateLoginUser, AuthController.login);

export default router;
