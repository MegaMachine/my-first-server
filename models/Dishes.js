const Sequelize = require('sequelize');
const db = require('../config/database');

const Dishes = db.define('dishes', {
  title: {
    type: Sequelize.TEXT,   
  },
  imagePath: {
    type: Sequelize.TEXT,   
  },
  description: {
    type: Sequelize.TEXT,   
  }
});

module.exports = Dishes;