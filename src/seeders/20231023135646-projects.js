/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Projects',
    [
      {
        title: 'pns-store',
        description: 'Adicionar descrição depois',
        thumbnail: 'Adicionar thumbnail dps',
        category: 'Front-End',
        github: 'https://github.com/GabrielToscanoML/pns-store',
        deploy: 'Adicionar Deploy depois',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Pokedex-Simples',
        description: 'Adicionar descrição depois',
        thumbnail: 'Adicionar thumbnail dps',
        category: 'Fundamentals',
        github: 'https://github.com/GabrielToscanoML/Pokedex-Simples',
        deploy: 'Adicionar Deploy depois',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

    down: async (queryInterface) => queryInterface.bulkDelete('Projects', null, {}),
};
