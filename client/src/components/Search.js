import React, { useContext, useEffect, useState } from "react";
import AppContext from "../utils/AppContext";
import { pruneRecipe } from "../utils/ParseRecipe";
import { useAuth0 } from "@auth0/auth0-react";

// Components
import InputForm from "./InputForm";
import Pantry from "./Pantry";
import RecipeContainer from "./RecipeContainer";
import fetch from "node-fetch";
import Landing from "./Landing";

export default ({ dispatch }) => {
    const { isAuthenticated } = useAuth0();
    const {
        cuisine,
        excludeCuisine,
        diet,
        intolerances,
        includeIngredients,
        excludeIngredients,
        recipes,
    } = useContext(AppContext);
    const [offset, setOffset] = useState(6);
    useEffect(() => dispatch({ activePage: "search" }), []);

    // InputForm handler
    const addToIncludeIngredients = (event) => {
        event.preventDefault();
        dispatch({
            includeIngredients: [
                ...new Set([
                    ...includeIngredients,
                    ...event.target.firstChild.value
                        .split(",")
                        .map((item) => item.trim())
                        .filter((item) => item !== ""),
                ]),
            ],
        });
        event.target.firstChild.value = "";
    };

    // Pantry item tags handler
    const deleteFromIncludeIngredients = (event) => {
        dispatch({
            includeIngredients: includeIngredients.filter(
                (item) => item !== event.target.innerText
            ),
        });
    };

    // Get recipes button handler
    const getRecipes = () => {
        fetch("api/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cuisine: cuisine.join(),
                excludeCuisine: excludeCuisine.join(),
                diet: diet.join(),
                intolerances: intolerances.join(),
                includeIngredients: includeIngredients.join(),
                excludeIngredients: excludeIngredients.join(),
                //need to add not user settable parameters in here
                number: 6,
                instructionsRequired: true,
                fillIngredients: true,
                addRecipeInformation: true,
                addRecipeNutrition: true,
                ignorePantry: true,
            }),
        })
            .then((response) => response.json())
            .then(({ results }) =>
                dispatch({
                    recipes: results.map((recipe) => pruneRecipe(recipe)),
                })
            )
            .catch((err) => console.log(err));
    };

    // Get more recipes button handler
    const moreRecipes = () => {
        setOffset(offset + 6);
        fetch("api/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cuisine: cuisine.join(),
                excludeCuisine: excludeCuisine.join(),
                diet: diet.join(),
                intolerances: intolerances.join(),
                includeIngredients: includeIngredients.join(),
                excludeIngredients: excludeIngredients.join(),
                //need to add not user settable parameters in here
                number: 6,
                offset: offset,
                instructionsRequired: true,
                fillIngredients: true,
                addRecipeInformation: true,
                addRecipeNutrition: true,
                ignorePantry: true,
            }),
        })
            .then((response) => response.json())
            .then(({ results }) =>
                dispatch({
                    recipes: [
                        ...recipes,
                        ...results.map((recipe) => pruneRecipe(recipe)),
                    ],
                })
            )
            .catch((err) => console.log(err));
    };
    return (
        <>
            {isAuthenticated ? (
                <>
                    <br></br>
                    <h1>
                        Type the ingredients you have on hand to find recipes
                        that work for you! Use the Save and Details buttons to
                        take a closer look, or save the recipe to your library!
                    </h1>
                    <br></br>
                    <InputForm submitHandler={addToIncludeIngredients} />
                    <button
                        className="moreButton Add button is-fullwidth"
                        onClick={getRecipes}>
                        {/* this button needs an event handler */}
                        Get Recipes
                    </button>
                    <Pantry
                        items={includeIngredients}
                        onClickHandler={deleteFromIncludeIngredients}
                    />
                    <RecipeContainer dispatch={dispatch} recipes={recipes} />
                    {recipes.length > 0 ? (
                        <button
                            className="moreButton button is-fullwidth"
                            onClick={moreRecipes}>
                            Get More Recipes
                        </button>
                    ) : null}
                </>
            ) : (
                <Landing />
            )}
        </>
    );
};
