import React from "react";
import "../App.css";

const css = {
    margin: "0.5em",
    background: "#222222",
    color: "var(--dgreen)",
    padding: "1px",
    borderRadius: "3px",
};


// footer prop should be either "search" or "library".  This component
// Renders some things conditionally depending on whether it's going in
// the search or library page. This is kind of hacky and could be handled
// better but it works so I'm leaving it in place for now.
export default ({ state, id, src, alt, title, prepTime, cookTime, footer }) => {
    // Handler for save button
    const saveHandler = () => {
        let recipe = state.get.recipes.filter((recipe) => recipe.id === id)[0];
        state.set({
            savedRecipes: [...new Set([...state.get.savedRecipes, recipe])],
        });
    };

    // Handler for delete button
    const deleteHandler = () => {
        state.set({
            savedRecipes: state.get.savedRecipes.filter(
                (recipe) => recipe.id !== id
            ),
        });
    };

    // Handler for details "button".  It's really a link
    // that redirects so we're just storing the corresponding
    // recipe id in the state so its accessible to the Details
    // component
    const detailsHandler = () => state.set({ activeRecipe: id });

    return (
        <div className="card card-modify" style={css}>
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
                    <p>Prep <i class="fas fa-clock"></i> : {prepTime} min</p>
                    <p>Cook <i class="fas fa-clock"></i> : {cookTime} min</p>
                </div>
            </div>
            <footer className="card-foot">
                <a
                    href="/details"
                    className="details-button button is-fullwidth"
                    onClick={detailsHandler}>
                    Details
                </a>
                {/* Render save or delete button depending on which page 
                it's on */}
                {footer === "search" ? (
                    <button
                        className="save-button button is-fullwidth"
                        onClick={saveHandler}>
                        Save
                    </button>
                ) : footer === "library" ? (
                    <button
                        className="delete-button button is-fullwidth"
                        onClick={deleteHandler}>
                        Delete
                    </button>
                ) : null}
            </footer>
        </div>
    );
};
