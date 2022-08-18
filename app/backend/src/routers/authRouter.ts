import { Router } from 'express';
import ValidateLogin from '../middlewares/ValidateLogin';
import AuthController from '../controllers/AuthController';

const router = Router();
const validateLogin = new ValidateLogin();
const authController = new AuthController(authService);

router.post('/login', validateLogin, authController.login);

export default router;
