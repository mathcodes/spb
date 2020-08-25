import React, { useContext, useEffect } from "react";
import AppContext from "../utils/AppContext";
import LogoSmall from "./LogoSmall"

// Components
import RecipeContainer from "./RecipeContainer";

export default ({ dispatch }) => {
    const { savedRecipes } = useContext(AppContext);
    useEffect(() => dispatch({ activePage: "library" }), []);
    const CSS = { textAlign: "center", fontSize:"larger" };
    return (
        <>
        <LogoSmall/>
            {savedRecipes.length > 0 ? (
                <>
                    <h1 style={CSS}>Saved Recipes</h1>
                    <br />
                    <RecipeContainer
                        dispatch={dispatch}
                        recipes={savedRecipes}
                    />
                </>
            ) : (
                <>
                    {" "}
                    <h1 className="h1Library">
                        There is nothing in your library!!!
                    </h1>
                    <br />
                    <h3 className="h3Library">
                        Easy as 1, 2, 3 to start saving recipes in your library:
                        <br />
                        <br />
                        1) Login{" "}
                        <i
                            className="fas fa-sign-in-alt tabicon"
                            aria-hidden="true"></i>
                        <br />
                        2) Search{" "}
                        <i
                            className="fa fa-search tabicon"
                            aria-hidden="true"></i>
                        <br />
                        3) Save{" "}
                        <span className="tag tagicon is-medium">Save</span>
                        <br />
                    </h3>
                </>
            )}
        </>
    );
};
