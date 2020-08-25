const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
    "User",
    new Schema({
        id: String,
        cuisine: Array,
        excludeCuisine: Array,
        diet: Array,
        intolerances: Array,
        includeIngredients: Array,
        excludeIngredients: Array,
        recipes: Array,
        savedRecipes: Array,
        activeRecipe: Number,
        activePage: String,
    })
);
