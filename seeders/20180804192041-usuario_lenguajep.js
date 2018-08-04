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
   return queryInterface.bulkInsert('Usuario_LenguajePs', [
    {
      UsuarioId: 1,
      LenguajePId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UsuarioId: 1,
      LenguajePId: 5,
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
   return queryInterface.bulkDelete('Usuario_LenguajePs', null, {});
  }
};
