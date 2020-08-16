import React from "react";
import RecipeContainer from "./RecipeContainer";

//test data delete later
const fakeRecipes = [1, 2, 3, 4, 5, 5, 6, 7, 87, 9, 0];

const Library = () =>
    <>
        <h1>Saved Recipes</h1><br/>
        <h2>Click on a recipes image to view more details, or use the button to remove the recipe from your library.</h2>
        <RecipeContainer recipes={fakeRecipes} />;
    </>
export default Library;