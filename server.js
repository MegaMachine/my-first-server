const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// Test database
db
  .authenticate()
  .then(() => console.log('Database connected...'))
  .catch((error) => console.log('Error ' + error));

// Create Server
const PORT = process.env.PORT || 5000;
const app = express();

// JSON Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.send('INDEX');
})

// Routes
app.use('/recipes', require('./routes/recipes'));

// app.use(bodyParser.json());
//Server listen
app.listen(PORT, console.log(`Server started on port ${PORT}`));

