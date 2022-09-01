import * as bcrypt from 'bcryptjs';
import ILogin from '../interfaces/ILogin'
import IMatch from '../interfaces/IMatch';
import IMatches from '../interfaces/IMatches';
import ITeam from '../interfaces/ITeam';
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

export const wrongEmail: ILogin = {
  email: 'wrong@email.com',
  password: 'senha123',
}

export const wrongPassword: ILogin = {
  email: 'email@email.com',
  password: 'wrongSenha',
}

export const tokenMock: string = 'some_token'

export const teamsMock: ITeam[] = [
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

export const matchesMock: IMatches[] = [
  {
    id: 1,
    homeTeam: 1,
    homeTeamGoals: 1,
    awayTeam: 2,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Águia do Vale"
    },
    teamAway: {
      teamName: "Burro da Central"
    },
  },
  {
    id: 2,
    homeTeam: 2,
    homeTeamGoals: 0,
    awayTeam: 3,
    awayTeamGoals: 2,
    inProgress: false,
    teamHome: {
      teamName: "Burro da Central"
    },
    teamAway: {
      teamName: "Xis Vê"
    },
  },
  {
    id: 3,
    homeTeam: 3,
    homeTeamGoals: 1,
    awayTeam: 1,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Xis Vê"
    },
    teamAway: {
      teamName: "Águia do Vale"
    },
  },
  {
    id: 4,
    homeTeam: 1,
    homeTeamGoals: 2,
    awayTeam: 3,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Águia do Vale"
    },
    teamAway: {
      teamName: "Xis Vê"
    },
  },
  {
    id: 5,
    homeTeam: 2,
    homeTeamGoals: 0,
    awayTeam: 1,
    awayTeamGoals: 1,
    inProgress: true,
    teamHome: {
      teamName: "Burro da Central"
    },
    teamAway: {
      teamName: "Águia do Vale"
    },
  },
  {
    id: 6,
    homeTeam: 3,
    homeTeamGoals: 1,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: "Xis Vê"
    },
    teamAway: {
      teamName: "Burro da Central"
    },
  },
]

export const matchesInProgress: IMatches[] = [
  {
    id: 5,
    homeTeam: 2,
    homeTeamGoals: 0,
    awayTeam: 1,
    awayTeamGoals: 1,
    inProgress: true,
    teamHome: {
      teamName: "Burro da Central"
    },
    teamAway: {
      teamName: "Águia do Vale"
    },
  },
  {
    id: 6,
    homeTeam: 3,
    homeTeamGoals: 1,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: "Xis Vê"
    },
    teamAway: {
      teamName: "Burro da Central"
    },
  },
]

export const matchesNotInProgress: IMatches[] = [
  {
    id: 1,
    homeTeam: 1,
    homeTeamGoals: 1,
    awayTeam: 2,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Águia do Vale"
    },
    teamAway: {
      teamName: "Burro da Central"
    },
  },
  {
    id: 2,
    homeTeam: 2,
    homeTeamGoals: 0,
    awayTeam: 3,
    awayTeamGoals: 2,
    inProgress: false,
    teamHome: {
      teamName: "Burro da Central"
    },
    teamAway: {
      teamName: "Xis Vê"
    },
  },
  {
    id: 3,
    homeTeam: 3,
    homeTeamGoals: 1,
    awayTeam: 1,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Xis Vê"
    },
    teamAway: {
      teamName: "Águia do Vale"
    },
  },
  {
    id: 4,
    homeTeam: 1,
    homeTeamGoals: 2,
    awayTeam: 3,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Águia do Vale"
    },
    teamAway: {
      teamName: "Xis Vê"
    },
  },
]

export const matchToBeInserted = {
  homeTeam:1,
  awayTeam:2,
  homeTeamGoals:0,
  awayTeamGoals:0
}

export const matchInserted: IMatch = {
  awayTeam: 2,
  awayTeamGoals: 0,
  homeTeam: 1,
  homeTeamGoals: 0,
  id: 7,
  inProgress: true
}

export const allFieldsMustBeFilled: string = 'All fields must be filled'

export const incorrectEmailOrPassword: string = 'Incorrect email or password'

export const noTokenProvided: string = 'No token provided'

export const invalidToken: string = 'Token must be a valid token'
