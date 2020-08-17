import React from "react";

// Components
import InputForm from "./InputForm";
import Pantry from "./Pantry";
import RecipeContainer from "./RecipeContainer";

export default ({ state }) => {
    // Input form submit event handler
    const onSubmitHandler = (event) => {
        event.preventDefault();
        state.set({
            includeIngredients: [
                ...new Set([
                    ...state.get.includeIngredients,
                    ...event.target.firstChild.value
                        .split(",")
                        .map((item) => item.trim())
                        .filter((item) => item !== ""),
                ]),
            ],
        });
        event.target.firstChild.value = "";
    };

    // Pantry on click event handler
    const onClickHandler = (event) => {
        state.set({
            includeIngredients: state.get.includeIngredients.filter(
                (item) => item !== event.target.innerText
            ),
        });
    };

    // Query recipes from spoonacular API
    // and save them to the app state
    const getRecipes = () => {
        fetch("/api/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // Convert all the props represented as
            // arrays in the state to strings
            body: (() => {
                let obj = {};
                for (const [key, value] of Object.entries(state.get)) {
                    if (value.length > 0)
                        obj = { ...obj, [key]: value.toString() };
                }
                return JSON.stringify(obj);
            })(),
        })
            .then((response) => response.json())
            .then(({ results }) => state.set({ recipes: results }))
            .then(() => console.log(state.get)) //for debugging
            .catch((err) => console.log(err));
    };

    return (
        <>
            <InputForm onSubmitHandler={onSubmitHandler} />
            <button
                className="button is-fullwidth is-warning"
                onClick={getRecipes}>
                Get Recipes
            </button>
            <Pantry
                items={state.get.includeIngredients}
                onClickHandler={onClickHandler}
            />
            <RecipeContainer
                state={state}
                renderRecipes={state.get.recipes}
                footer="search"
            />
        </>
    );
};
