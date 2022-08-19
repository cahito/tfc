import * as jwt from 'jsonwebtoken';
import ILogin from '../interfaces/ILogin';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

class AuthService {
  public static login(payload: ILogin): string {
    return jwt.sign(payload, JWT_SECRET);
  }
}

export default AuthService;
