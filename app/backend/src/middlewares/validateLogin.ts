import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases } from 'http-status-codes';
import getUsers from './getUsers';

const validEmailAndPassword = async (email: string, password: string) => {
  const users = await getUsers();
  const validEmail = users.some((user) => user.email === email);
  const validPassword = users.some((user) => user.password === password);
  if (validEmail === false || validPassword === false) {
    const err = new Error('Incorrect email or password');
    err.name = ReasonPhrases.UNAUTHORIZED;
    throw err;
  }
};

const validateLogin = async (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || email.length === 0) {
    const err = new Error('All fields must be filled');
    err.name = ReasonPhrases.BAD_REQUEST;
    throw err;
  }
  if (!password || password.length === 0) {
    const err = new Error('All fields must be filled');
    err.name = ReasonPhrases.BAD_REQUEST;
    throw err;
  }
  await validEmailAndPassword(email, password);

  next();
};

export default validateLogin;
