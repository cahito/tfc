import ILogin from "../interfaces/ILogin"

export const loginMock: ILogin = {
  email: 'email@email.com',
  password: 'senha123',
}

export const emailLessMock: ILogin = {
  email: '',
  password: 'senha123',
}

export const tokenMock: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoic2VuaGExMjMiLCJpYXQiOjE1MTYyMzkwMjJ9.YagDhjgMQbeluhMVzzHyvvecZgzucVQhGFPIpbIeoUY'

export const allFieldsMustBeFilled: string = 'All fields must be filled'
