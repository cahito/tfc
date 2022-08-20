import ILogin from '../interfaces/ILogin'
import IUser from '../interfaces/IUser'

export const usersMock: IUser[] = [
  {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'email@email.com',
  password: 'senha123',
  },
  {
    id: 2,
    username: 'User',
    role: 'user',
    email: 'user@email.com',
    password: 'senha456',
    },
]

export const loginMock: ILogin = {
  email: 'email@email.com',
  password: 'senha123',
}

export const emailLessMock: ILogin = {
  email: '',
  password: 'senha123',
}

export const passwordLessMock: ILogin = {
  email: 'email@email.com',
  password: '',
}

export const invalidEmail = {
  email: 9,
  password: 'senha123',
}

export const invalidPassword = {
  email: 'email@email.com',
  password: 1234567,
}

export const wrongEmail = {
  email: 'wrong@email.com',
  password: 'senha123',
}

export const wrongPassword = {
  email: 'email@email.com',
  password: 'wrongSenha',
}

export const tokenMock: string = 'some_token'

export const allFieldsMustBeFilled: string = 'All fields must be filled'

export const incorrectEmailOrPassword: string = 'Incorrect email or password'
