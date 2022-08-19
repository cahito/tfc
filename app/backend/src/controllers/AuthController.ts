import { Request, Response } from 'express';
import ILogin from '../interfaces/ILogin';
import AuthService from '../services/AuthService';

class AuthController {
  static async login(req: Request, res: Response): Promise<void> {
    const payload = req.body as ILogin;
    const token: string = await AuthService.login(payload);

    res.status(200).json({ token });
  }
}

export default AuthController;
