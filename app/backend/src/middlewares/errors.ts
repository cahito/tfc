import { ErrorRequestHandler } from 'express';
import { getStatusCode } from 'http-status-codes';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { name, message } = err;
  const statusCode = getStatusCode(name);
  console.log('Error code/message', statusCode, message);
  res.status(statusCode).json({ message });
};

export default errorMiddleware;
