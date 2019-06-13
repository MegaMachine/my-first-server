const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Recipes = require('../models/Recipes');

// Recipes.sync({
//   force: false
// });
router.get('/', (req, res) => {
  getAllRecipes(res);
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
    Recipes
      .create({
        name,
        description,
        imagePath,
      })
      .then(recipes =>  res.send({result: recipes, success: success, errors: errors}))
      .catch( error => console.log('Recipes create error ->', error.message));
     
  }
});

router.delete('/:id', (req, res) => {
  console.log(req.params);
  Recipes
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(recipes =>  {
      getAllRecipes(res);
    })
    .catch( error => console.log('Recipes destroy error ->', error.message));
});
router.put('/', (req, res) => {
  console.log(req);
});

//Get all recipes
function getAllRecipes(res){
  Recipes
    .findAll()
    .then(recipes => { 
      res.send(recipes)
    })
    .catch(error => console.log('Recipes get error -> ', error));
};
module.exports = router;