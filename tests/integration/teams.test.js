const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const getResult = {
    teams: [
      {
        id: 1,
        name: 'São Paulo Futebol Clube',
        initials: 'SPFC',
      },
      {
        id: 2,
        name: 'Clube Atlético Mineiro',
        initials: 'CAM',
      },
      {
        id: 3,
        name: 'Flamengo',
        initials: 'FLA',
      },
      {
        id: 4,
        name: 'Fortaleza',
        initials: 'FOR',
      },
    ],
  };

const { expect } = chai;

chai.use(chaiHttp);

describe('Usando o método GET em /teams', () => {
    it('Retorna a lista completa dos times com status 200!', async () => {
        const response = await chai.request(app).get('/teams');
        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal(getResult);
    });
});