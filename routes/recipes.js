const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Dishes = require('../models/Dishes');

// Dishes.sync({
//   force: false
// });
router.get('/', (req, res) => {
  getAllDishes(res);
});

router.post('/add', (req, res, next) => {
  let { name, description, imagePath } = req.body;
  let errors = [];
  let success = true;
  if (!name) {
    errors.push({ text: 'Please add a name' });
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
        name,
        description,
        imagePath,
      })
      .then(dishes =>  res.send({result: dishes, success: success, errors: errors}))
      .catch( error => console.log('Dishes create error ->', error.message));
     
  }
});

router.delete('/:id', (req, res) => {
  console.log(req.params);
  Dishes
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dishes =>  {
      getAllDishes(res);
    })
    .catch( error => console.log('Dishes destroy error ->', error.message));
});
router.put('/', (req, res) => {
  console.log(req);
});

//Get all recipes
function getAllDishes(res){
  Dishes
    .findAll()
    .then(dishes => { 
      res.send(dishes)
    })
    .catch(error => console.log('Dishes get error -> ', error));
};
module.exports = router;