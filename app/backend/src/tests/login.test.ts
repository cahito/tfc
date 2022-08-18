import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp from 'chai-http';

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

const loginMock = {
  email: 'email@email.com',
  password: 'senha123',
}

const tokenMock = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoic2VuaGExMjMiLCJpYXQiOjE1MTYyMzkwMjJ9.YagDhjgMQbeluhMVzzHyvvecZgzucVQhGFPIpbIeoUY'

describe('Login', () => {
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
