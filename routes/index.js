'use strict';

var express = require('express');
var router = express.Router();
// require in db

module.exports = router
    router.get('/', function (req, res){
    console.log('hi') 
      res.render('index');
    });

  router.get('/food', function(req, res){
   // res.render('index.html');
  });
/*
  router.get('/food/ingredients', function(req, res){
    res.render('index.html');
  });

  router.get('/food/recipe', function(req, res){
    res.render('index.html');
  });
*/
  router.route('/food/myIngredients')
  //in route I assume you cant have more than one get
  //as it is refering to myIngredients path
    .get(function (req, res) { // merge me with get below
      res.send('Get ingredients');
    })
    // .get(function (req, res) { //based on req.query 
    //   res.send('Get all OR get one');
    // })
    .post(function (req, res) {
      res.send('Add');
    })
    .put(function (req, res) {
      res.send('Update');
    });

    router.route('/food/recipe')
    //in route I assume you cant have more than one get
    //as it is refering to myIngredients path
      .get(function (req, res) { // query string will be great for filtering by title or who made the recipe
        res.send('Get recipe');
      })
      .post(function (req, res) {
        res.send('Add');
      })
      .put(function (req, res) {
        res.send('notes');
      });

      router.route('/food/recipe/:id')
      //rest--can you explaina gain
      // get 1 recipe by id and put for single (by id)