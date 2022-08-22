import { ReasonPhrases } from 'http-status-codes';
import ILogin from '../interfaces/ILogin';
import IUser from '../interfaces/IUser';
import UserService from '../services/UserService';

const validateLoginUser = async (payload: ILogin) => {
  const { email, password } = payload;
  const users: IUser[] = await UserService.list();
  console.log('users no validateLoginUser: ', users);
  const validEmail = users.some((user) => user.email === email);
  console.log('validEmail y/n?: ', validEmail);
  const validPassword = users.some((user) => user.password === password);
  console.log('validPassword y/n?: ', validPassword);
  if (!validEmail && !validPassword) {
    const err = new Error('Incorrect email or password');
    err.name = ReasonPhrases.UNAUTHORIZED;
    throw err;
  }
};

export default validateLoginUser;
