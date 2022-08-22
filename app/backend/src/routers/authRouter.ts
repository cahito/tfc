import { Router } from 'express';
// import validateToken from '../middlewares/validateToken';
import validateLogin from '../middlewares/validateLogin';
import AuthController from '../controllers/AuthController';
import AuthService from '../services/AuthService';

const router = Router();
const authService = new AuthService();
const authController = new AuthController(authService);

router.post(
  '/login',
  validateLogin,
  authController.login,
);
// router.get('/login/validate', AuthController.validate);

export default router;
