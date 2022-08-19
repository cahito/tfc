import * as jwt from 'jsonwebtoken';
import ILogin from '../interfaces/ILogin';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

class AuthService {
  static login = (payload: ILogin) => {
    const token = jwt.sign(payload, JWT_SECRET);

    return token;
  };
}

export default AuthService;
