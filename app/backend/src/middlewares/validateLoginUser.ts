import * as bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases } from 'http-status-codes';
import getUsers from './getUsers';

const validateLoginUser = async (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  console.log('password no valLogUser: ', password);
  const users = await getUsers();
  const validEmail = users.some((user) => user.email === email);
  const validPassword = users.some((user) => {
    console.log('password dentro do user.password: ', user.password);
    return bcrypt.compareSync(password, user.password);
  });
  if (!validEmail || !validPassword) {
    const err = new Error('Incorrect email or password');
    err.name = ReasonPhrases.UNAUTHORIZED;
    throw err;
  }

  next();
};

export default validateLoginUser;
