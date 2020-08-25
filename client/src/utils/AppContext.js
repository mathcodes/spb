import React from "react";

export default React.createContext({
    id: "",
    cuisine: [],
    excludeCuisine: [],
    diet: [],
    intolerances: [],
    includeIngredients: [],
    excludeIngredients: [],
    recipes: [],
    savedRecipes: [],
    activeRecipe: 0,
    activePage: "",
});
