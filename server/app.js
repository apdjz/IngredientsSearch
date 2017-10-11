'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var {db, Recipes, Steps, StepsList, Ingredients, MyIngredientsList, Quantity, Measurements} = require('./db');
const router = require('../routes');
let app = express();



app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api', router);
app.set('view engine', 'html');


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.send('Oh no something went wrong: ' + err.message);
});


app.listen(3000, function() {
  console.log('The server is listening on port 3000');
  db
    .sync()
    .then(function() {
      console.log('Synchronated the database');
    })
    .catch(function(err) {
      console.error('Trouble', err, err.stack);
    });
});
