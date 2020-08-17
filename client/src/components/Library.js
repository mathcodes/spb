import React from "react";
import RecipeContainer from "./RecipeContainer";

export default ({ state }) => {
    const libraryFooter = (
        <footer className="card-footer">
            <button className="button is-warning is-fullwidth">Details</button>
            <button className="button is-warning is-fullwidth">Delete</button>
        </footer>
    );
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Saved Recipes</h1>
            <br />
            <RecipeContainer
                recipes={state.get.recipes}
                savedRecipes={state.get.savedRecipes}
                cardFooter={libraryFooter}
            />
        </>
    );
};
