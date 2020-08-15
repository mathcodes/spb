import React from "react";

// Components
import InputForm from "./InputForm";
import Pantry from "./Pantry";
import RecipeContainer from "./RecipeContainer";

// need to write on submit handler for input form
// in search context

export default ({ state }) => {
    const methods = {
        onSubmitHandler: (event) => {
            event.preventDefault();
            state.set({
                includedIngredients: [
                    ...new Set([
                        ...state.get.includedIngredients,
                        ...event.target.firstChild.value
                            .split(",")
                            .map((item) => item.trim()),
                    ]),
                ],
            });
            console.log(state.get.includedIngredients);
        },
    };

    return (
        <>
            <InputForm state={state} methods={methods} />
            <Pantry />
            <RecipeContainer />
        </>
    );
};
