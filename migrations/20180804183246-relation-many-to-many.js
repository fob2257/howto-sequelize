'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return [
    queryInterface.addConstraint('Usuario_LenguajePs', ['UsuarioId'], {
      type: 'FOREIGN KEY',
      name: 'FK_UsuarioLenguajeP_Usuario_1', // useful if using queryInterface.removeConstraint
      references: {
        table: 'Usuarios',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }),
    queryInterface.addConstraint('Usuario_LenguajePs', ['LenguajePId'], {
      type: 'FOREIGN KEY',
      name: 'FK_UsuarioLenguajeP_LenguajeP_1', // useful if using queryInterface.removeConstraint
      references: {
        table: 'LenguajePs',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }),
  ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return [
    queryInterface.removeConstraint('Usuario_LenguajePs', 'FK_UsuarioLenguajeP_Usuario_1'),
    queryInterface.removeConstraint('Usuario_LenguajePs', 'FK_UsuarioLenguajeP_LenguajeP_1'),
  ]
  }
};
