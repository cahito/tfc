import * as jwt from 'jsonwebtoken';
import ILogin from '../interfaces/ILogin';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

class AuthService {
  login = (payload: ILogin) => {
    const token = jwt.sign(payload, JWT_SECRET);
    console.log('token no service', token);
    return token;
  };

  validate = async (token: string) => {
    const data = jwt.decode(token);

    console.log('data no AuthService: ', data);

    const result = 'ok';
    return result;
  };
}

export default AuthService;
