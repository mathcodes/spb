import React from "react";
import Card from "./Card";
import FlexContainer from "./FlexContainer";
import { v4 as uuid } from "uuid";

// recipes should be a list of recipe objects
// footer is either "search" or "library" and
// determines which buttons are rendered in
// the card footer.
export default ({ state, footer, renderRecipes }) => {
    console.log("RecipeContainer", renderRecipes);
    return (
        <FlexContainer
            children={
                renderRecipes
                    ? renderRecipes.map((recipe) => (
                          <Card
                              state={state}
                              key={uuid()}
                              id={recipe.information.id}
                              src={recipe.information.image}
                              alt={recipe.information.name}
                              title={recipe.information.name} // to maintain card spacing
                              //   title={recipe.title.slice(0, 32)} // to maintain card spacing
                              prepTime={recipe.information.prepTime}
                              cookTime={recipe.information.cookTime}
                              footer={footer}
                          />
                      ))
                    : null
            }
        />
    );
};
