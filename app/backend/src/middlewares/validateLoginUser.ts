import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases } from 'http-status-codes';
import IUser from '../interfaces/IUser';
import UserService from '../services/UserService';

const validateLoginUser = async (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const users: IUser[] = await UserService.list();
  const validEmail = users.some((user) => user.email === email);
  const validPassword = users.some((user) => user.password === password);
  if (!validEmail || !validPassword) {
    const err = new Error('Incorrect email or password');
    err.name = ReasonPhrases.UNAUTHORIZED;
    throw err;
  }

  next();
};

export default validateLoginUser;
