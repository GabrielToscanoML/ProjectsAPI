const chai = require('chai');

const { expect } = chai;

describe('Usando o método GET em /teams', () => {
    it('Retorna a lista completa dos times!', async () => {
        response = await minhaRequisicao();
        expect(response.status).to.be.equal(200);
    });
});