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
} from './data'
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import { afterEach, beforeEach } from 'mocha';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login', () => {
  describe('1 - Quando receber os parâmetros "email" e "password"', () => {
    beforeEach(() => {
      sinon.stub(AuthService, 'login').resolves(tokenMock)
      sinon.stub(UserService, 'list').resolves(usersMock);
    })

    afterEach(() => {
      sinon.restore()
    })

    it('retorna status 200', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(loginMock)

      expect(response.status).to.be.eq(200)
    })

    it('retorna um token', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(loginMock)

      expect(response.text).to.be.eq(JSON.stringify({ token: tokenMock }))
    })
  })

  describe('2 - Quando não receber o parâmetro "email"', () => {
    it('retorna o status 400', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(emailLessMock)

      expect(response.status).to.be.eq(400)
    })

    it('retorna uma mensagem de erro', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(emailLessMock)

      expect(response.text).to.be.eq(JSON.stringify({ message: allFieldsMustBeFilled }))
    })
  })

  describe('3 - Quando não receber o parâmetro "password"', () => {
    it('retorna o status 400', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(passwordLessMock)

      expect(response.status).to.be.eq(400)
    })

    it('retorna uma mensagem de erro', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(passwordLessMock)

      expect(response.text).to.be.eq(JSON.stringify({ message: allFieldsMustBeFilled }))
    })
  })

  describe('4 - Quando receber algum parâmetro inválido', () => {
    it('retorna o status 401 com "email" inválido', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(invalidEmail)

      expect(response.status).to.be.eq(401)
    })

    it('retorna uma mensagem de erro com "email" inválido', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(invalidEmail)

      expect(response.text).to.be.eq(JSON.stringify({ message: incorrectEmailOrPassword }))
    })

    it('retorna o status 401 com "password" inválido', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(invalidPassword)

      expect(response.status).to.be.eq(401)
    })

    it('retorna uma mensagem de erro com "password" inválido', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(invalidPassword)

      expect(response.text).to.be.eq(JSON.stringify({ message: incorrectEmailOrPassword }))
    })
  })

  describe('5 - Quando receber algum parâmetro errado', () => {
    beforeEach(() => {
      sinon.stub(UserService, 'list').resolves(usersMock)
    })

    afterEach(() => {
      sinon.restore()
    })

    it('retorna o status 401 com "email" errado', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(wrongEmail)

      expect(response.status).to.be.eq(401)
    })

    it('retorna uma mensagem de erro com "email" errado', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(wrongEmail)

      expect(response.text).to.be.eq(JSON.stringify({ message: incorrectEmailOrPassword }))
    })

    it('retorna o status 401 com "password" errado', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(wrongPassword)

      expect(response.status).to.be.eq(401)
    })

    it('retorna uma mensagem de erro com "password" errado', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(wrongPassword)

      expect(response.text).to.be.eq(JSON.stringify({ message: incorrectEmailOrPassword }))
    })
  })
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

})
