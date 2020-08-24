import React, { useContext, useEffect } from "react";
import AppContext from "../utils/AppContext";

// Components
import RecipeContainer from "./RecipeContainer";

export default ({ dispatch }) => {
    const { savedRecipes } = useContext(AppContext);
    useEffect(() => dispatch({ activePage: "library" }), []);
    const CSS = { textAlign: "center" };
    return (
        <>
            <h1 style={CSS}>Saved Recipes</h1>
            <br />
            <RecipeContainer dispatch={dispatch} recipes={savedRecipes} />
        </>
    );
};
