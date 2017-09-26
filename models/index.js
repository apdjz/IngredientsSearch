var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/foodsearch');

db
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

var Recipes = db.define('recipes', {
    id: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    notes: {
        type: Sequelize.TEXT
    },
    steps: {
        type: Sequelize.INTEGER
    },
    cookTime: {
        type: Sequelize.TIME
    },
    prepTime: {
        type: Sequelize.TIME
    },
    skillLevel: {
        type: Sequelize.STRING
    }
});
var Steps = db.define('steps', {
    id: {
        type: Sequelize.INTEGER
    },
    recipe_id: {
        type: Sequelize.INTEGER
    },
    notes: {
        type: Sequelize.TEXT
    },
    numberOfSteps: {
        type: Sequelize.INTEGER
    }
});
var Quantity = db.define('quantity', {
    id: {
        type: Sequelize.INTEGER
    },
    recipe_id: {
        type: Sequelize.INTEGER
    },
    notes: {
        type: Sequelize.TEXT
    },
    numberOfSteps: {
        type: Sequelize.INTEGER
    }
});
module.exports = {
  Recipes: Recipes,
  User: User
};