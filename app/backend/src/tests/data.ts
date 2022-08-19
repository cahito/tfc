import ILogin from "../interfaces/ILogin"

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

export const tokenMock: string = 'some_token'

export const allFieldsMustBeFilled: string = 'All fields must be filled'

export const incorrectEmailOrPassword: string = 'Incorrect email or password'
