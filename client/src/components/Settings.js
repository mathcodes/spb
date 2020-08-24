import React, { useContext } from "react";
import AppContext from "../utils/AppContext";
import { v4 as uuid } from "uuid";

// Components
import FlexContainer from "./FlexContainer";
import InputForm from "./InputForm";
import Pantry from "./Pantry";
import CheckBox from "./CheckBox";

export default () => {
    const { excludeIngredients } = useContext(AppContext);
    const intolerances = [
        "dairy",
        "Egg",
        "Gluten",
        "Grain",
        "Peanut",
        "Seafood",
        "Sesame",
        "Shellfish",
        "Soy",
        "Sulfite",
        "Tree Nut",
        "Wheat",
    ];

    const diet = [
        "Gluten Free",
        "Ketogenic",
        "Vegetarian",
        "Lacto-Vegetarian",
        "Ovo-Vegetarian",
        "Vegan",
        "Pescetarian",
        "Paleo",
        "Primal",
        "Whole30",
    ];

    const cuisine = [
        "African",
        "American",
        "British",
        "Cajun",
        "Caribbean",
        "Chinese",
        "Eastern European",
        "European",
        "French",
        "German",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Jewish",
        "Korean",
        "latin American",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "Southern",
        "Spanish",
        "Thai",
        "Vietnamese",
    ];
    return (
        <>
            <h2>
                Select or enter the items below to either exclude any food
                intolerances, cuisines, or ingredients, and select a diet if you
                like. All information will be stored in your settings for future
                searches until you decide to change them.
            </h2>
            <label className="label has-text-centered">Food Intolerances</label>
            <FlexContainer>
                {intolerances.map((item) => (
                    <CheckBox
                        key={uuid()}
                        text={item}
                        // need to add event handlers
                    />
                ))}
            </FlexContainer>{" "}
            <label className="label has-text-centered">
                Must Fit These Diets
            </label>
            <FlexContainer>
                {diet.map((item) => (
                    <CheckBox
                        key={uuid()}
                        text={item}
                        // need to add event handlers
                    />
                ))}
            </FlexContainer>{" "}
            <label className="label has-text-centered">exclude Cuisine</label>
            <FlexContainer>
                {cuisine.map((item) => (
                    <CheckBox
                        key={uuid()}
                        text={item}
                        // need to add event handlers
                    />
                ))}
            </FlexContainer>
            <label className="label has-text-centered">
                exclude Ingredients
            </label>
            <InputForm />
            <Pantry items={excludeIngredients} />
        </>
    );
};
