import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp from 'chai-http';

import { app } from '../app';

import {
  loginMock,
  tokenMock,
  emailLessMock,
  allFieldsMustBeFilled,
} from './data'

chai.use(chaiHttp);

const { expect } = chai;

describe('Login', () => {
  describe('Quando receber os parâmetros "email" e "password"', () => {
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

      expect(response).to.have.property('json')
      expect(response).property('json').to.be.eq({ tokenMock })
    })
  })

  describe('Quando não receber o parâmetro "email"', () => {
    it('retorna o status 400', async () => {
      const response = await chai.request(app)
      .post('/login')
      .send(emailLessMock)

      expect(response.status).to.be.eq(400)
    })

    it('restorna a mensagem ""', async () => {
      const response = await chai.request(app)
      .post('/login')
      .send(emailLessMock)

      expect(response).to.have.property('json')
      expect(response).property('json').to.be.eq(allFieldsMustBeFilled)
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
