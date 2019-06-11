const Sequelize = require('sequelize');
const db = require('../config/database');

const Dishes = db.define('dishes', {
  title: {
    type: Sequelize.STRING,   
  },
  imagePath: {
    type: Sequelize.STRING,   
  },
  description: {
    type: Sequelize.STRING,   
  },
  test: {
    type: Sequelize.JSON,   
  }
});

module.exports = Dishes;