import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases } from 'http-status-codes';
import IUser from '../interfaces/IUser';
import UserService from '../services/UserService';

const validateLoginUser = async (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const users: IUser[] = await UserService.list();
  const validEmail = users.some((user) => user.email === email);
  const validPassword = users.some((user) => user.password === password);
  console.log('users no validateLoginUser: ', users);
  console.log('validEmail: ', validEmail);
  console.log('validPassword: ', validPassword);
  if (validEmail && validPassword) {
    next();
  }

  const err = new Error('Incorrect email or password');
  err.name = ReasonPhrases.UNAUTHORIZED;
  return err;
};

export default validateLoginUser;
