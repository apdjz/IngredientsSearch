'use strict';

let router = require('express').Router();
let db = require('../models');


module.exports = router;
    router.get('/', function (req, res, next){
     res.send('home');
     next();
    });
//------myIngredients------//
    router.route('/myIngredients')
      .get(function (req, res) { // merge me with get below
      res.send('ingredients home');
      //res.send('Get ingredients');
    })
    .post(function (req, res) {
      res.send('Add');
    })
    .put(function (req, res) {
      res.send('Update');
    });
//---------recipes--------//
    router.route('/recipes')
      .get(function (req, res, next) {//   res.send('Get recipes');
        db.Recipes.findAll()
          .then(res.send.bind(res))
          .catch(next);
      })
      .post(function (req, res) {
        res.send('Add');
      })
      .put(function (req, res) {
        res.send('notes');
      });

    router.route('/recipes/:id')
      .get(function (req, res, next) {
      db.Recipes.findById(req.params.id);
      db.Recipes.findOne({
        where: req.params,
      })
        .then(function (result){
          res.send(result);
        })
        .catch(next);
      });
