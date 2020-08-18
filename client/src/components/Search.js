import React, { useState, useEffect } from "react";

// Components
import InputForm from "./InputForm";
import Pantry from "./Pantry";
import RecipeContainer from "./RecipeContainer";
import Logo from "./Logo";

export default ({ state }) => {
    const [offset, setOffset] = useState([6]);

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
                // Because we didn't seperate out the data in the state
                // that is used for API queries and the rest, we have
                // to do it here
                let stateSlice = {
                    cuisine: state.get.cuisine,
                    excludeCuisine: state.get.excludeCuisine,
                    diet: state.get.diet,
                    intolerances: state.get.intolerances,
                    includeIngredients: state.get.includeIngredients,
                    excludeIngredients: state.get.excludeIngredients,
                    number: [6],
                };
                let obj = {};

                for (const [key, value] of Object.entries(stateSlice)) {
                    if (value.length > 0)
                        obj = { ...obj, [key]: value.toString() };
                }
                return JSON.stringify(obj);
            })(),
        })
            .then((response) => response.json())
            .then(({ results }) => state.set({ recipes: results }))
            .then(() => console.log(offset)) //for debugging
            .catch((err) => console.log(err));
    };

    const moreRecipes = () => {
        setOffset([offset[0] + 6]);
        fetch("/api/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // Convert all the props represented as
            // arrays in the state to strings
            body: (() => {
                // Because we didn't seperate out the data in the state
                // that is used for API queries and the rest, we have
                // to do it here
                let stateSlice = {
                    cuisine: state.get.cuisine,
                    excludeCuisine: state.get.excludeCuisine,
                    diet: state.get.diet,
                    intolerances: state.get.intolerances,
                    includeIngredients: state.get.includeIngredients,
                    excludeIngredients: state.get.excludeIngredients,
                    offset: offset,
                    number: [6],
                };
                let obj = {};

                for (const [key, value] of Object.entries(stateSlice)) {
                    if (value.length > 0)
                        obj = { ...obj, [key]: value.toString() };
                }
                return JSON.stringify(obj);
            })(),
        })
            .then((response) => response.json())
            .then(({ results }) =>
                state.set({ recipes: [...state.get.recipes, ...results] })
            )
            .then(() => console.log(offset)) //for debugging
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Logo />
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

            <button
                className="button is-fullwidth is-warning"
                onClick={moreRecipes}>
                Load More Recipes
            </button>
        </>
    );
};
