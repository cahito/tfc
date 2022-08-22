import { Request, Response } from 'express';
import { ReasonPhrases } from 'http-status-codes';
import validateLoginUser from '../middlewares/validateLoginUser';
import ILogin from '../interfaces/ILogin';
import AuthService from '../services/AuthService';

class AuthController {
  constructor(private authService: AuthService) { }

  login = async (req: Request, res: Response): Promise<void> => {
    const payload = req.body as ILogin;
    await validateLoginUser(payload);
    const token: string = this.authService.login(payload);

    res.status(200).json({ token });
  };

  validate = async (req: Request, res: Response): Promise<void> => {
    const token = req?.headers?.authorization;
    if (!token) {
      const err = new Error('No token provided');
      err.name = ReasonPhrases.UNAUTHORIZED;
      throw err;
    }
    const role = await this.authService.validate(token);

    res.status(200).json({ role });
  };
}

export default AuthController;
