import React from "react";
import FlexContainer from "./FlexContainer";
import CheckBox from "./CheckBox";
import InputForm from "./InputForm";
import Pantry from "./Pantry";
import { intolerances, diets, cuisines } from "../assets/js/Lists";
import { v4 as uuid } from "uuid";

export default ({ state }) => {
    // Input form submit event handler
    const inputformOnSubmitHandler = (event) => {
        event.preventDefault();
        state.set({
            excludedIngredients: [
                ...new Set([
                    ...state.get.excludedIngredients,
                    ...event.target.firstChild.value
                        .split(",")
                        .map((item) => item.trim()),
                ]),
            ],
        });
        event.target.firstChild.value = "";
    };

    // Pantry click event handler
    const pantryOnClickHandler = (event) =>
        state.set({
            excludedIngredients: state.get.excludedIngredients.filter(
                (item) => item !== event.target.innerText
            ),
        });

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

    // Diets click event handler
    const dietsOnClickHandler = (event) => {
        if (event.target.checked) {
            state.set({
                diets: [...new Set([...state.get.diets, event.target.value])],
            });
        } else {
            state.set({
                diets: state.get.diets.filter(
                    (item) => item !== event.target.value
                ),
            });
        }
    };

    // Excluded cuisines click event handler
    const excludedCuisinesOnClickHandler = (event) => {
        if (event.target.checked) {
            state.set({
                excludedCuisines: [
                    ...new Set([
                        ...state.get.excludedCuisines,
                        event.target.value,
                    ]),
                ],
            });
        } else {
            state.set({
                excludedCuisines: state.get.excludedCuisines.filter(
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
                Must Fit These Diets
            </label>
            <FlexContainer>
                {diets.map((item) => (
                    <CheckBox
                        key={uuid()}
                        text={item}
                        onClickHandler={dietsOnClickHandler}
                        checked={state.get.diets.includes(item) ? true : false}
                    />
                ))}
            </FlexContainer>{" "}
            <label className="label has-text-centered">Excluded Cuisines</label>
            <FlexContainer>
                {cuisines.map((item) => (
                    <CheckBox
                        key={uuid()}
                        text={item}
                        onClickHandler={excludedCuisinesOnClickHandler}
                        checked={
                            state.get.excludedCuisines.includes(item)
                                ? true
                                : false
                        }
                    />
                ))}
            </FlexContainer>
            <label className="label has-text-centered">
                Excluded Ingredients
            </label>
            <InputForm onSubmitHandler={inputformOnSubmitHandler} />
            <Pantry
                items={state.get.excludedIngredients}
                onClickHandler={pantryOnClickHandler}
            />
        </>
    );
};
