import { Request, Response } from 'express';
import ILogin from '../interfaces/ILogin';
import AuthService from '../services/AuthService';

class AuthController {
  static login(req: Request, res: Response): void {
    const payload = req.body as ILogin;
    const token: string = AuthService.login(payload);

    res.status(200).json({ token });
  }
}

export default AuthController;
