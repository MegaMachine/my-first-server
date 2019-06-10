const Sequelize = require('sequelize');

module.exports = new Sequelize('db_angular', 'root', 'root', {
  dialect: 'mysql'
});
