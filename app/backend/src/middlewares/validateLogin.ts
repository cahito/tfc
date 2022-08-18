import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases } from 'http-status-codes';

const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const err = new Error('All fields must be filled');
    err.name = ReasonPhrases.BAD_REQUEST;
  }

  if (password.length < 6) {
    const err = new Error('');
    err.name = ReasonPhrases.BAD_REQUEST;
  }

  next();
};

export default validateLogin;
