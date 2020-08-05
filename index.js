const db = require('./models');

db.Usuario.findAll({
  include: [
    {
      model: db.LenguajeP,
      as: 'lenguajesProgramacion',
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'Usuario_LenguajeP'],
      },
      through: { attributes: [] },
    },
  ],
})
  .then((result) => console.log(JSON.stringify(result, null, 2)))
  .catch((error) => console.error(error))
  .finally(() => process.exit());
