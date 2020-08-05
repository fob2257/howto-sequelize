'use strict';
module.exports = (sequelize, DataTypes) => {
  var Usuario_LenguajeP = sequelize.define(
    'Usuario_LenguajeP',
    {
      UsuarioId: DataTypes.INTEGER,
      LenguajePId: DataTypes.INTEGER,
    },
    {}
  );

  Usuario_LenguajeP.associate = function (models) {
    // associations can be defined here
  };

  return Usuario_LenguajeP;
};
