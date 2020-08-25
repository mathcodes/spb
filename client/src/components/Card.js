import React, { useContext } from "react";
import AppContext from "../utils/AppContext";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default ({ dispatch, id, src, alt, title, prepTime, cookTime }) => {
    const { isAuthenticated } = useAuth0();
    const { activePage, recipes, savedRecipes } = useContext(AppContext);
    const CSS = {
        margin: "0.5em",
        background: "#222222",
        color: "var(--dgreen)",
        padding: "1px",
        borderRadius: "3px",
    };

    // Details link handler
    const setActiveRecipe = () => dispatch({ activeRecipe: id });

    // Save Recipe
    const saveRecipe = () => {
        const recipe = [...recipes, ...savedRecipes].filter(
            ({ information }) => information.id === id
        )[0];
        dispatch({ savedRecipes: [...savedRecipes, recipe] });
    };

    // Delete Recipe
    const deleteRecipe = () => {
        if (isAuthenticated)
            dispatch({
                savedRecipes: savedRecipes.filter(
                    ({ information }) => information.id !== id
                ),
            });
    };

    return (
        <div className="card card-modify" style={CSS}>
            <div className="card-image">
                <figure className="image">
                    <img src={src} alt={alt} />
                </figure>
            </div>
            <header className="card-header">
                <p className="card-header-title is-centered">{title}</p>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>
                        Prep <i className="fas fa-clock"></i> : {prepTime} min
                    </p>
                    <p>
                        Cook <i className="fas fa-clock"></i> : {cookTime} min
                    </p>
                </div>
            </div>
            <footer className="card-foot">
                <Link
                    to="/details"
                    className="moreButton button is-fullwidth"
                    onClick={setActiveRecipe}>
                    Details
                </Link>
                {activePage === "search" ? (
                    <button
                        className="save-button button is-fullwidth"
                        onClick={saveRecipe}>
                        Save
                    </button>
                ) : activePage === "library" ? (
                    <button
                        className="delete-button button is-fullwidth"
                        onClick={deleteRecipe}>
                        Delete
                    </button>
                ) : null}
            </footer>
        </div>
    );
};
