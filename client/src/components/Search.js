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
            includedIngredients: [
                ...new Set([
                    ...state.get.includedIngredients,
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
            includedIngredients: state.get.includedIngredients.filter(
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
            body: JSON.stringify({
                cuisine: state.get.cuisines.toString(),
                excludeCuisine: state.get.excludedCuisines.toString(),
                diet: state.get.diets.toString(),
                intolerances: state.get.intolerances.toString(),
                includeIngredients: state.get.includedIngredients.toString(),
                excludeIngredients: state.get.excludedIngredients.toString(),
                //These query params are not user settable
                instructionsRequired: true,
                fillIngredients: true,
                addRecipeInformation: true,
                addRecipeNutrtition: true,
                ignorePantry: true,
                number: 10,
                sort: "max-used-ingredients", //min-missing-ingredients
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
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
                items={state.get.includedIngredients}
                onClickHandler={onClickHandler}
            />
            <RecipeContainer />
        </>
    );
};
