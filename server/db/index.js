const {db, Recipes, Steps, StepsList, Ingredients, MyIngredientsList, Quantity, Measurements} = require('./models');

Steps.belongsTo(StepsList);
Recipes.belongsTo(StepsList);
Quantity.belongsTo(Recipes);
Quantity.belongsTo(Ingredients);
Quantity.belongsTo(Measurements);
Ingredients.belongsTo(MyIngredientsList);

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
