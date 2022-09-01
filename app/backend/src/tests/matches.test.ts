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
  matchesMock,
  matchesInProgress,
  matchesNotInProgress,
  matchInserted,
  matchToBeInserted,
} from './data'
import * as jwt from 'jsonwebtoken';
import { afterEach, beforeEach } from 'mocha';
import { StatusCodes } from 'http-status-codes';
import Match from '../database/models/match';
import IMatches from '../interfaces/IMatches';
import IMatch from '../interfaces/IMatch';
import Team from '../database/models/team';

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches', () => {
  describe('1 - Quando for feita a requisiçao GET na rota "/matches"', () => {
    beforeEach(() => {
      sinon.stub(Match, 'findAll').resolves(matchesMock as unknown as Match[])
    })

    afterEach(() => {
      sinon.restore()
    })

    it('retorna status 200', async () => {
      const response = await chai.request(app)
        .get('/matches')

      expect(response.status).to.be.eq(StatusCodes.OK)
    })

    it('retorna um array com as partidas cadastradas', async () => {
      const response = await chai.request(app)
        .get('/matches')

      expect(response.body).to.be.eql(matchesMock)
    })
  })

  describe('2 - Quando for feita a requisiçao GET na rota "/matches" com o inProgress "false"', () => {
    beforeEach(() => {
      sinon.stub(Match, 'findAll').resolves(matchesNotInProgress as unknown as Match[])
    })

    afterEach(() => {
      sinon.restore()
    })

    it('retorna status 200', async () => {
      const response = await chai.request(app)
        .get('/matches')
        .query({ name: 'inProgress', value: 'false' })

      expect(response.status).to.be.eq(StatusCodes.OK)
    })

    it('retorna um array com as partidas em andamento', async () => {
      const response = await chai.request(app)
        .get('/matches')
        .query({ name: 'inProgress', value: 'false' })

      expect(response.body).to.be.eql(matchesNotInProgress)
    })
  })

  describe('3 - Quando for feita a requisiçao GET na rota "/matches" com o inProgress "true"', () => {
    beforeEach(() => {
      sinon.stub(Match, 'findAll').resolves(matchesInProgress as unknown as Match[])
    })

    afterEach(() => {
      sinon.restore()
    })

    it('retorna status 200', async () => {
      const response = await chai.request(app)
        .get('/matches')
        .query({ name: 'inProgress', value: 'true' })

      expect(response.status).to.be.eq(StatusCodes.OK)
    })

    it('retorna um array com as partidas finalizadas', async () => {
      const response = await chai.request(app)
        .get('/matches')
        .query({ name: 'inProgress', value: 'true' })

      expect(response.body).to.be.eql(matchesInProgress)
    })
  })

  describe('4 - Quando for feita a requisiçao POST na rota "/matches"', () => {
    beforeEach(() => {
      sinon.stub(jwt, 'verify').resolves(loginMock)
      sinon.stub(Team, 'findAll').resolves(teamsMock as Team[])
      sinon.stub(Match, 'create').resolves(matchInserted as Match)
    })

    afterEach(() => {
      sinon.restore()
    })

    it('retorna status 201 se o token e os dados forem válidos', async () => {
      const response = await chai.request(app)
        .post('/matches')
        .set('authorization', tokenMock)
        .send(matchToBeInserted)

      expect(response.status).to.be.eq(StatusCodes.CREATED)
    })

    it('retorna um array com as partidas finalizadas', async () => {
      const response = await chai.request(app)
        .post('/matches')
        .set('authorization', tokenMock)
        .send(matchToBeInserted)

      expect(response.body).to.be.eql(matchInserted)
    })
  })
})
