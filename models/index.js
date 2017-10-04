let Sequelize = require('sequelize');
let db = new Sequelize('postgres://localhost:5432/foodsearch', {
    logging: false
});

db
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
db.sync();
//views for permissions
let Recipes = db.define('recipes', {
    id: {
        type: Sequelize.INTEGER,
        isInt: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cookTime: {
        type: Sequelize.TIME
    },
    prepTime: {
        type: Sequelize.TIME
    },
    skillLevel: {
        type: Sequelize.STRING,
        allowNull: true
    }
});
let Steps = db.define('steps', {
    id: {
        type: Sequelize.INTEGER,
        isInt: true,
        primaryKey: true
    },
    instructions: {
        type: Sequelize.TEXT
    },
    notes: {
        type: Sequelize.TEXT,
        allowNull: true
    }
});
let StepsList = db.define('stepsList', {
    id: {
        type: Sequelize.INTEGER,
        isInt: true,
        primaryKey: true
    }
});
let Ingredients = db.define('ingredients', {
    id: {
        type: Sequelize.INTEGER,
        isInt: true,
        primaryKey: true
    },
    description: {
        type: Sequelize.TEXT
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING
    }
});
let MyIngredientsList = db.define('myIngredientsList', {
    id: {
        type: Sequelize.INTEGER,
        isInt: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
let Quantity = db.define('quantity', {
    id: {
        type: Sequelize.INTEGER,
        isInt: true,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.DECIMAL,
        isDecimal: true
    }
});
let Measurements = db.define('measurements', {
    id: {
        type: Sequelize.INTEGER,
        isInt: true,
        primaryKey: true
    },
    unit: {
        type: Sequelize.STRING
    }
});
Steps.belongsTo(StepsList);
Recipes.belongsTo(StepsList);
Quantity.belongsTo(Recipes);
Quantity.belongsTo(Ingredients);
Quantity.belongsTo(Measurements);
Ingredients.belongsTo(MyIngredientsList);

module.exports = {
Recipes,
Steps,
StepsList,
Ingredients,
MyIngredientsList,
Quantity,
Measurements
};
