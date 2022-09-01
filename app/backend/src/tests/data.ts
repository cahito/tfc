import * as bcrypt from 'bcryptjs';
import ILogin from '../interfaces/ILogin'
import IUser from '../interfaces/IUser'

export const usersMock: IUser[] = [
  {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'email@email.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393umDaBmjKccSa.pIehlSJgkdMPLy5BNhm',
  },
  {
    id: 2,
    username: 'User',
    role: 'user',
    email: 'user@email.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393uobLruTGFq82Mpi1xhy5iqbRfbyzhinK',
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

export const teamsMock = [
  {
    id: 1,
    teamName: "Águia do Vale"
  },
  {
    id: 2,
    teamName: "Burro da Central"
  },
  {
    id: 3,
    teamName: "Xis Vê"
  },
]

export const allFieldsMustBeFilled: string = 'All fields must be filled'

export const incorrectEmailOrPassword: string = 'Incorrect email or password'

export const noTokenProvided: string = 'No token provided'

export const invalidToken: string = 'Token must be a valid token'
