import React from "react";
import FlexContainer from "./FlexContainer";
import CheckBox from "./CheckBox";
import InputForm from "./InputForm";
import Pantry from "./Pantry";
import { intolerances, diets, cuisines } from "../assets/js/Lists";
import { v4 as uuid } from "uuid";

const Settings = (props) => (
    <>
        <label className="label has-text-centered">Food Intolerances</label>
        <FlexContainer
            children={intolerances.map((item) => (
                <CheckBox key={uuid()} text={item} />
            ))}
        />
        <label className="label has-text-centered">Diets</label>
        <FlexContainer
            children={diets.map((item) => (
                <CheckBox key={uuid()} text={item} />
            ))}
        />
        <label className="label has-text-centered">Excluded Cuisines</label>
        <FlexContainer
            children={cuisines.map((item) => (
                <CheckBox key={uuid()} text={item} />
            ))}
        />
        <label className="label has-text-centered">Excluded Ingredients</label>
        <InputForm placeholder="Ingredients" />
        <Pantry items={["meekrob", "sun dried tomatos"]} />
    </>
);

export default Settings;

/*
diet dropdown
intolerances radio buttons
excludeIngredients text input

*/