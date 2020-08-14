import React from "react";
import RecipeContainer from "./RecipeContainer";

//test data delete later
const fakeRecipes = [1, 2, 3, 4, 5, 5, 6, 7, 87, 9, 0];

const Library = () => <RecipeContainer recipes={fakeRecipes} />;

export default Library;