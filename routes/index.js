'use strict';

let router = require('express').Router();
const {db, Recipes, Steps, StepsList, Ingredients, MyIngredientsList, Quantity, Measurements} = require('../server/db');


module.exports = router;
    router.get('/', function (req, res, next){
     res.send('start route');
     next();
    });
//------myIngredients------//
    router.route('/myIngredients')
      .get(function (req, res) { // merge me with get below
      res.send('ingredients home');
      //res.send('Get ingredients');
    })
    // .post(function (req, res) {
    //   res.send('Add');
    // })
    // .put(function (req, res) {
    //   res.send('Update');
    // });
//---------recipes--------//
    router.route('/recipes')
      .get(function (req, res, next) {
        Recipes.findAll()
          //.then(res.json.bind(res))
         .then( allRecipes => {
            //console.log('getting all recipes', allRecipes)
            res.json(allRecipes);
         })
          .catch(next);
      })
      // .post(function (req, res) {
      //   console.log(JSON.stringify(req.body));
      //   console.log('req.body.id', req.body['name']);
      // })
      // .put(function (req, res) {
      //   res.send('notes');//form 
      // });

    router.route('/recipes/:id')
      .get(function (req, res, next) {
      Recipes.findById(req.params.id);
      Recipes.findOne({
        where: req.params,
      })
        .then(function (result){
          res.send(result);
        })
        .catch(next);
      });

  //  router.get('/api/recipes',function redirect (req, res, next){
  //   console.log('\n\n successfully redirected from /api/recipes to /recipes  \n\n')
  //   res.json({
  //       hello: 'world',
  //       title: 'my json'
  //   })
  //  })
