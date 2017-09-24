'use strict';

var express = require('express');
var router = express.Router();

module.exports = function(io){
    router.get('/', function (req, res){
      res.render('Hello Test');
    });

  router.get('/food', function(req, res){
    res.render('index.html');
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
    .get(function (req, res) {
      res.send('Get one');
    })
    .get(function (req, res) {
      res.send('Get all');
    })
    .post(function (req, res) {
      res.send('Add');
    })
    .put(function (req, res) {
      res.send('Update');
    });

    router.route('/food/recipe')
    //in route I assume you cant have more than one get
    //as it is refering to myIngredients path
      .get(function (req, res) {
        res.send('Get all');
      })
      .get(function (req, res) {
        res.send('Get all saved in db');
      })
      .post(function (req, res) {
        res.send('Add');
      })
      .put(function (req, res) {
        res.send('notes');
      });

  return router;
};