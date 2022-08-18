import * as jwt from 'jsonwebtoken';
import ILogin from '../interfaces/ILogin';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

class AuthService {
  // constructor() { }
  login = (payload: ILogin) => {
    const token = jwt.sign(payload, JWT_SECRET);
    console.log('token no service', token);
    return token;
  };
}

export default AuthService;
