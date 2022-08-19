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

export const tokenMock: string = 'some_token'

export const allFieldsMustBeFilled: string = 'All fields must be filled'
