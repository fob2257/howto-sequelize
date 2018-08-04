'use strict';
module.exports = (sequelize, DataTypes) => {
  var LenguajeP = sequelize.define('LenguajeP', {
    nombre: DataTypes.STRING
  }, {});
  LenguajeP.associate = function (models) {
    // associations can be defined here
    LenguajeP.belongsToMany(models.Usuario, {
      through: 'Usuario_LenguajeP',
      as: 'usuarios',
      foreignKey: 'LenguajePId',
    })
  };
  return LenguajeP;
};