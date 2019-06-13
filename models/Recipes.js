const Sequelize = require('sequelize');
const db = require('../config/database');

const Recipes = db.define('recipes', {
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

module.exports = Recipes;