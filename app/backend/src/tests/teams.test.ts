import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import {
  loginMock,
  tokenMock,
  emailLessMock,
  allFieldsMustBeFilled,
  passwordLessMock,
  incorrectEmailOrPassword,
  invalidEmail,
  invalidPassword,
  wrongEmail,
  wrongPassword,
  usersMock,
  teamsMock,
} from './data'
import TeamService from '../services/TeamService';
import { afterEach, beforeEach } from 'mocha';
import { StatusCodes } from 'http-status-codes';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams', () => {
  describe('1 - Quando for feita a requisiçao na rota "/teams"', () => {
    beforeEach(() => {
      sinon.stub(TeamService, 'list').resolves(teamsMock)
    })

    afterEach(() => {
      sinon.restore()
    })

    it('retorna status 200', async () => {
      const response = await chai.request(app)
      .get('/teams')

    expect(response.status).to.be.eq(StatusCodes.OK)
    })

    it('retorna um array com os times cadastrados', async () => {
      const response = await chai.request(app)
      .get('/teams')

      expect(response.text).to.be.eq(JSON.stringify(teamsMock))
    })
  })

  describe('2 - Quando for feita a requisição na rota "/teams/:id"', () => {
    afterEach(() => {
      sinon.restore()
    })

    it('retorna status 200', async () => {
      sinon.stub(TeamService, 'getById').withArgs('2').resolves(teamsMock[1])
      const response = await chai.request(app)
      .get('/teams/2')

    expect(response.status).to.be.eq(StatusCodes.OK)
    })

    it('retorna um array com os times cadastrados', async () => {
      sinon.stub(TeamService, 'getById').withArgs('2').resolves(teamsMock[1])
      const response = await chai.request(app)
      .get('/teams/2')

      expect(response.text).to.be.eq(JSON.stringify(teamsMock[1]))
    })

    it.skip('retorna status 400 caso o time não esteja cadastrado', async () => {
      sinon.stub(TeamService, 'getById').withArgs('999').throws(new Error('Not a valid team'))
      const response = await chai.request(app)
      .get('/teams/999')

    expect(response.status).to.be.eq(StatusCodes.BAD_REQUEST)
    })

    it.skip('retorna um erro "Not a valid team" caso o time não esteja cadastrado', async () => {
      sinon.stub(TeamService, 'getById').withArgs('999').throws(new Error('Not a valid team'))
      const response = await chai.request(app)
      .get('/teams/999')

      expect(response.text).to.be.eq('')
    })
  })
})
