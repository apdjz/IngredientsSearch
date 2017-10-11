const Sequelize = require('sequelize');
const db = require('./db');

let Recipes = db.define('recipes', {
    id: {
        type: Sequelize.INTEGER,
        isInt: true,
        primaryKey: true,
        validate: { notEmpty: true }
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
module.exports = {
    db,
    Recipes,
    Steps,
    StepsList,
    Ingredients,
    MyIngredientsList,
    Quantity,
    Measurements
};
