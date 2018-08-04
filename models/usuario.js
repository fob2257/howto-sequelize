'use strict';
module.exports = (sequelize, DataTypes) => {
  var Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    apellidoP: DataTypes.STRING,
    apellidoM: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
    Usuario.belongsToMany(models.LenguajeP, {
      through: 'Usuario_LenguajeP',
      as: 'lenguajesProgramacion',
      foreignKey: 'UsuarioId',
    })
  };
  return Usuario;
};