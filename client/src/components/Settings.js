import React, { useContext } from "react";
import AppContext from "../utils/AppContext";
import { v4 as uuid } from "uuid";
import { useAuth0 } from "@auth0/auth0-react";

// Components
import FlexContainer from "./FlexContainer";
import InputForm from "./InputForm";
import Pantry from "./Pantry";
import CheckBox from "./CheckBox";
import Landing from "./Landing";
import LogoSmall from "./LogoSmall"

export default ({ dispatch }) => {
    const { isAuthenticated } = useAuth0();
    const {
        excludeIngredients,
        excludeCuisine,
        intolerances,
        diet,
    } = useContext(AppContext);
    const intolerancesList = [
        "Dairy",
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

    const dietList = [
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

    const cuisineList = [
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

    // InputForm handler
    const addToExcludeIngredients = (event) => {
        event.preventDefault();
        dispatch({
            excludeIngredients: [
                ...new Set([
                    ...excludeIngredients,
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
    const deleteFromExcludeIngredients = (event) => {
        dispatch({
            excludeIngredients: excludeIngredients.filter(
                (item) => item !== event.target.innerText
            ),
        });
    };

    // Intolerances checkbox handler
    const setIntolerances = (event) => {
        if (event.target.checked)
            dispatch({ intolerances: [...intolerances, event.target.value] });
        else
            dispatch({
                intolerances: intolerances.filter(
                    (item) => item !== event.target.value
                ),
            });
    };

    // Diet checkbox handler
    const setDiet = (event) => {
        if (event.target.checked)
            dispatch({ diet: [...diet, event.target.value] });
        else
            dispatch({
                diet: diet.filter((item) => item !== event.target.value),
            });
    };

    // Excluded cuisines checkbox handler
    const setExcludeCuisine = (event) => {
        if (event.target.checked)
            dispatch({
                excludeCuisine: [...excludeCuisine, event.target.value],
            });
        else
            dispatch({
                excludeCuisine: excludeCuisine.filter(
                    (item) => item !== event.target.value
                ),
            });
    };

    return (
        <>
        <LogoSmall/>
            {isAuthenticated ? (
                <>
                    <h2>
                        Select or enter the items below to either exclude any
                        food intolerances, cuisines, or ingredients, and select
                        a diet if you like. All information will be stored in
                        your settings for future searches until you decide to
                        change them.
                    </h2>
                    <label className="label has-text-centered">
                        Food Intolerances
                    </label>
                    <FlexContainer>
                        {intolerancesList.map((item) => (
                            <CheckBox
                                key={uuid()}
                                text={item}
                                onChangeHandler={setIntolerances}
                                checked={
                                    intolerances.includes(item) ? true : false
                                }
                            />
                        ))}
                    </FlexContainer>{" "}
                    <label className="label has-text-centered">
                        Must Fit These Diets
                    </label>
                    <FlexContainer>
                        {dietList.map((item) => (
                            <CheckBox
                                key={uuid()}
                                text={item}
                                onChangeHandler={setDiet}
                                checked={diet.includes(item) ? true : false}
                                // need to add event handlers
                            />
                        ))}
                    </FlexContainer>{" "}
                    <label className="label has-text-centered">
                        exclude Cuisine
                    </label>
                    <FlexContainer>
                        {cuisineList.map((item) => (
                            <CheckBox
                                key={uuid()}
                                text={item}
                                onChangeHandler={setExcludeCuisine}
                                checked={
                                    excludeCuisine.includes(item) ? true : false
                                }
                                // need to add event handlers
                            />
                        ))}
                    </FlexContainer>
                    <label className="label has-text-centered">
                        exclude Ingredients
                    </label>
                    <InputForm submitHandler={addToExcludeIngredients} />
                    <Pantry
                        items={excludeIngredients}
                        onClickHandler={deleteFromExcludeIngredients}
                    />
                </>
            ) : (
                <Landing />
            )}
        </>
    );
};
