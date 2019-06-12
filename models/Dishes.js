const Sequelize = require('sequelize');
const db = require('../config/database');

const Dishes = db.define('dishes', {
  name: {
    type: Sequelize.STRING,   
  },
  imagePath: {
    type: Sequelize.STRING,   
  },
  description: {
    type: Sequelize.STRING,   
  }
}, {
  timestamps: false
});

module.exports = Dishes;