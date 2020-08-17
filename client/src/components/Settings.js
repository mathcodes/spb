import React from "react";
import FlexContainer from "./FlexContainer";
import CheckBox from "./CheckBox";
import InputForm from "./InputForm";
import Pantry from "./Pantry";
import { intolerances, diet, cuisine } from "../assets/js/Lists";
import { v4 as uuid } from "uuid";

export default ({ state }) => {
    // Input form submit event handler
    const inputformOnSubmitHandler = (event) => {
        event.preventDefault();
        state.set({
            excludeIngredients: [
                ...new Set([
                    ...state.get.excludeIngredients,
                    ...event.target.firstChild.value
                        .split(",")
                        .map((item) => item.trim()),
                ]),
            ],
        });
        event.target.firstChild.value = "";
    };

    // Pantry click event handler
    const pantryOnClickHandler = (event) => {
        state.set({
            excludeIngredients: state.get.excludeIngredients.filter(
                (item) => item !== event.target.innerText
            ),
        });
    };

    // Intolerances click event handler
    const intolerancesOnClickHandler = (event) => {
        if (event.target.checked) {
            state.set({
                intolerances: [
                    ...new Set([...state.get.intolerances, event.target.value]),
                ],
            });
        } else {
            state.set({
                intolerances: state.get.intolerances.filter(
                    (item) => item !== event.target.value
                ),
            });
        }
    };

    // diet click event handler
    const dietOnClickHandler = (event) => {
        if (event.target.checked) {
            state.set({
                diet: [...new Set([...state.get.diet, event.target.value])],
            });
        } else {
            state.set({
                diet: state.get.diet.filter(
                    (item) => item !== event.target.value
                ),
            });
        }
    };

    // exclude Cuisine click event handler
    const excludeCuisineOnClickHandler = (event) => {
        if (event.target.checked) {
            state.set({
                excludeCuisine: [
                    ...new Set([
                        ...state.get.excludeCuisine,
                        event.target.value,
                    ]),
                ],
            });
        } else {
            state.set({
                excludeCuisine: state.get.excludeCuisine.filter(
                    (item) => item !== event.target.value
                ),
            });
        }
    };

    return (
        <>
            <label className="label has-text-centered">Food Intolerances</label>
            <FlexContainer>
                {intolerances.map((item) => (
                    <CheckBox
                        key={uuid()}
                        text={item}
                        onClickHandler={intolerancesOnClickHandler}
                        checked={
                            state.get.intolerances.includes(item) ? true : false
                        }
                    />
                ))}
            </FlexContainer>{" "}
            <label className="label has-text-centered">
                Must Fit These diet
            </label>
            <FlexContainer>
                {diet.map((item) => (
                    <CheckBox
                        key={uuid()}
                        text={item}
                        onClickHandler={dietOnClickHandler}
                        checked={state.get.diet.includes(item) ? true : false}
                    />
                ))}
            </FlexContainer>{" "}
            <label className="label has-text-centered">exclude Cuisine</label>
            <FlexContainer>
                {cuisine.map((item) => (
                    <CheckBox
                        key={uuid()}
                        text={item}
                        onClickHandler={excludeCuisineOnClickHandler}
                        checked={
                            state.get.excludeCuisine.includes(item)
                                ? true
                                : false
                        }
                    />
                ))}
            </FlexContainer>
            <label className="label has-text-centered">
                exclude Ingredients
            </label>
            <InputForm onSubmitHandler={inputformOnSubmitHandler} />
            <Pantry
                items={state.get.excludeIngredients}
                onClickHandler={pantryOnClickHandler}
            />
        </>
    );
};
