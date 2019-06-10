const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Dishes = require('../models/Dishes');

router.get('/', (req, res) => {
  Dishes
    .findAll()
    .then(dishes => { 
      console.log(dishes);
      res.sendStatus(200);
    })
    .catch(error => console.log('Dishes error -> ', error))
});

module.exports = router;