const Sequelize = require('sequelize');

const sequelize = new Sequelize('express-crud', 'root', 'Parija@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;