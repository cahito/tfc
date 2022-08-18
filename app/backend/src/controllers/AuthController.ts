import { Request, Response } from 'express';
import ILogin from '../interfaces/ILogin';
import AuthService from '../services/AuthService';

class AuthController {
  constructor(private authService = new AuthService()) { }

  async login(req: Request, res: Response): Promise<void> {
    const payload = req.body as ILogin;
    console.log('payload no controller', payload);
    const token: string = this.authService.login(payload);

    res.status(200).json({ token });
  }
}

export default AuthController;
