'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const configFilePath = `${__dirname}/../config/config.json`;

const config = require(configFilePath)[env];

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
}

const db = {};
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));

    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = { ...db, sequelize, Sequelize };
