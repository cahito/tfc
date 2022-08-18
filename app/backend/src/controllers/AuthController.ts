import { Request, Response } from 'express';
import ILogin from '../interfaces/ILogin';
import AuthService from '../services/AuthService';

export default class AuthController {
  constructor(private authService: AuthService) { }

  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body as ILogin;
    const token: string = this.authService.login(req.body);

    res.status(200).json(token);
  }
}
