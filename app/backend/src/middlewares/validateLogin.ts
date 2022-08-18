import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases } from 'http-status-codes';

const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { email } = req.body;
  if (!email || email.length === 0) {
    const err = new Error('All fields must be filled');
    err.name = ReasonPhrases.BAD_REQUEST;
    throw err;
  }

  next();
};

export default validateLogin;
