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
} from './data'
import AuthService from '../services/AuthService';
import { afterEach, beforeEach } from 'mocha';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login', () => {
  describe('Quando receber os parâmetros "email" e "password"', () => {
    beforeEach(() => {
      sinon.stub(AuthService, 'login').returns(tokenMock as string);
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

  describe('Quando não receber o parâmetro "email"', () => {
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

  describe('Quando não receber o parâmetro "password"', () => {
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
