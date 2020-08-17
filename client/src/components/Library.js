import React from "react";
import RecipeContainer from "./RecipeContainer";

export default ({ state }) => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Saved Recipes</h1>
            <br />
            <RecipeContainer
                renderRecipes={state.get.recipes} //change this to savedRecipes
                footer="library"
            />
        </>
    );
};
