import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import ILogin from '../interfaces/ILogin';
import AuthService from '../services/AuthService';

class AuthController {
  // constructor(private authService: AuthService) { }

  login = async (req: Request, res: Response): Promise<void> => {
    const payload = req.body as ILogin;
    const token: string = await AuthService.login(payload);

    res.status(StatusCodes.OK).json({ token });
  };

  validate = async (req: Request, res: Response): Promise<void> => {
    const token = req?.headers?.authorization;
    if (!token) {
      const err = new Error('No token provided');
      err.name = ReasonPhrases.UNAUTHORIZED;
      throw err;
    }
    const role = await AuthService.validate(token);

    res.status(200).json({ role });
  };
}

export default AuthController;
