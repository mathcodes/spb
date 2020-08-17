import React from "react";
import Card from "./Card";
import FlexContainer from "./FlexContainer";
import { v4 as uuid } from "uuid";

// recipes should be a list of recipe objects
const RecipeContainer = ({ recipes }) => (
    <FlexContainer
        children={
            recipes
                ? recipes.map((recipe) => (
                      <Card
                          key={uuid()}
                          src={recipe.image}
                          alt={recipe.title}
                          title={recipe.title.slice(0, 32)} // to maintain card spacing
                          prepTime="60 minutes"
                      />
                  ))
                : null
        }
    />
);

export default RecipeContainer;
