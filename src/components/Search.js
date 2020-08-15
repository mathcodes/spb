import React from "react";

// Components
import InputForm from "./InputForm";
import Pantry from "./Pantry";
import RecipeContainer from "./RecipeContainer";

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
        },
    };

    return (
        <>
            <InputForm state={state} methods={methods} />
            <Pantry items={state.get.includedIngredients} />
            <RecipeContainer />
        </>
    );
};
