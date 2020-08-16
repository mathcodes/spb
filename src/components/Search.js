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
    const onClickHandler = (event) =>
        state.set({
            includedIngredients: state.get.includedIngredients.filter(
                (item) => item !== event.target.innerText
            ),
        });

    return (
        <>
            <InputForm onSubmitHandler={onSubmitHandler} />
            <Pantry
                items={state.get.includedIngredients}
                onClickHandler={onClickHandler}
            />
            <RecipeContainer />
        </>
    );
};
