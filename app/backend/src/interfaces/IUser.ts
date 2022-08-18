import ILogin from './ILogin';

export default interface IUser extends ILogin {
  id?: number,
  role: string,
  email: string,
}
