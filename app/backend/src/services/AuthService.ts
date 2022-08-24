import * as jwt from 'jsonwebtoken';
import ILogin from '../interfaces/ILogin';
import 'dotenv/config';
import getUsers from '../middlewares/getUsers';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

class AuthService {
  static login = async (payload: ILogin) => {
    const token = jwt.sign({ email: payload.email }, JWT_SECRET);
    console.log('token no service', token);
    return token;
  };

  static validate = async (token: string) => {
    const data = jwt.decode(token) as ILogin;
    const users = await getUsers();
    const loginUser = users.find((user) => user.email === data.email);
    console.log(loginUser);
    const role = loginUser?.role;
    console.log(role);
    return role;
  };
}

export default AuthService;
