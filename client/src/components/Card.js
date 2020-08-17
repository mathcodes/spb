import React from "react";
import "../App.css";

const css = {
    margin: "0.5em",
    background: "#222222",
    color: "var(--dgreen)",
    padding: "1px",
};

// footer prop should be either "search" or "library".  This component
// Renders some things conditionally depending on whether it's going in
// the search or library page. This is kind of hacky and could be handled
// better but it works so I'm leaving it in place for now.
export default ({ state, id, src, alt, title, prepTime, cookTime, footer }) => {
    const saveHandler = () => {
        let recipe = state.get.recipes.filter((recipe) => recipe.id === id)[0];
        state.set({
            savedRecipes: [...new Set([...state.get.savedRecipes, recipe])],
        });
    };

    const deleteHandler = () => {
        state.set({
            savedRecipes: state.get.savedRecipes.filter(
                (recipe) => recipe.id !== id
            ),
        });
    };

    return (
        <div className="card" style={css}>
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
                    <p>prep time: {prepTime} minutes</p>
                    <p>cook time: {cookTime} minutes</p>
                </div>
            </div>
            <footer className="card-footer">
                <button className="button is-warning is-fullwidth">
                    Details
                </button>
                {/* Render save or delete button depending on which page 
                it's on */}
                {footer === "search" ? (
                    <button
                        className="button is-warning is-fullwidth"
                        onClick={saveHandler}>
                        Save
                    </button>
                ) : footer === "library" ? (
                    <button
                        className="button is-warning is-fullwidth"
                        onClick={deleteHandler}>
                        Delete
                    </button>
                ) : null}
            </footer>
        </div>
    );
};
