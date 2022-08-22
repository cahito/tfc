import { Request, Response, NextFunction } from 'express';
// import { ReasonPhrases } from 'http-status-codes';
// import IUser from '../interfaces/IUser';
// import UserService from '../services/UserService';

const validateToken = async (req: Request, _res: Response, next: NextFunction) => {
  next();
};

export default validateToken;
