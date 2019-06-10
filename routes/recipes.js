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
  // const data = {
  //   title: 'Mega Burger',
  //   description: 'We take a boolka and meat kotleta',
  //   imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg'
  // };

  // let { title, description, imagePath } = req.body;
  let errors = [];
  next(console.log(req))
  
  // if (!title) {
  //   errors.push({ text: 'Please add a title' });
  // }
  // if (!description) {
  //   errors.push({ text: 'Please add a description' });
  // }
  // if (!imagePath) {
  //   errors.push({ text: 'Please add a image url' });
  // }

  // Check for errors
  // if (error.length > 0) {

  // } else {
    //Insert into table
  //   Dishes
  //     .create({
  //       title,
  //       description,
  //       imagePath
  //     })
  //     .then(dishes => res.redirect('/recipes'))
  //     .catch( error => console.log('Dishes create error ->', error.message));
  // }


});

module.exports = router;