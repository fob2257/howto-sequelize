'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('LenguajePs', [
    {
      nombre: 'Java',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'JavaScript',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'PHP',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'Go',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'C++',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('LenguajePs', null, {});
  }
};
