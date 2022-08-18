import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import AuthController from '../controllers/AuthController';
import AuthService from '../services/AuthService';

const router = Router();
const authService = new AuthService();
const authController = new AuthController(authService);

router.post('/login', validateLogin, (req, res) => authController.login(req, res));

export default router;
