import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
// import validateLoginUser from '../middlewares/validateLoginUser';
import AuthController from '../controllers/AuthController';

const router = Router();
const authController = new AuthController();

router.post(
  '/login',
  validateLogin,
  // validateLoginUser,
  authController.login,
);
router.get('/login/validate', authController.validate);

export default router;
