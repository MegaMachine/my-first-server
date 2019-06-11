const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Dishes = require('../models/Dishes');

router.get('/', (req, res) => {
  Dishes
    .findAll()
    .then(dishes => { 
      res.send(dishes)
    })
    .catch(error => console.log('Dishes error -> ', error));
});

router.post('/add', (req, res, next) => {
  let { title, description, imagePath } = req.body;
  let errors = [];
  let success = true;
  if (!title) {
    errors.push({ text: 'Please add a title' });
  }
  if (!description) {
    errors.push({ text: 'Please add a description' });
  }
  if (!imagePath) {
    errors.push({ text: 'Please add a image url' });
  }

  // Check for errors
  if (errors.length > 0) {
    success = false;
    res.send({result: req.body, success: success, errors: errors});
  } else {
    //Insert into table
    Dishes
      .create({
        title,
        description,
        imagePath,
        test: {ing: [1,2,3]}
      })
      .then(dishes =>  res.send({result: dishes, success: success, errors: errors}))
      .catch( error => console.log('Dishes create error ->', error.message));
     
  }


});

module.exports = router;