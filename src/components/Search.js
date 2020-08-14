import React from "react";

// Components
import InputForm from "./InputForm";
import Pantry from "./Pantry";
import RecipeContainer from "./RecipeContainer";

//just for testing; delete later
const items = [
    "ham",
    "potato",
    "eggs",
    "bacon",
    "orangutans",
    "fruit bats",
    "breakfast cereal",
];

const Search = (props) => (
    <>
        <InputForm />
        <Pantry items={items} />
        <RecipeContainer recipes={items} />
    </>
);

export default Search;