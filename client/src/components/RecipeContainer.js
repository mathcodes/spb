import React from "react";
import Card from "./Card";
import FlexContainer from "./FlexContainer";

// recipes should be a list of recipe objects
// footer is either "search" or "library" and
// determines which buttons are rendered in
// the card footer.
export default ({ state, footer, renderRecipes }) => {
    return (
        <FlexContainer
            children={
                renderRecipes
                    ? renderRecipes.map((recipe) => (
                          <Card
                              state={state}
                              key={recipe.id}
                              id={recipe.id}
                              src={recipe.image}
                              alt={recipe.title}
                              title={recipe.title} // to maintain card spacing
                              //   title={recipe.title.slice(0, 32)} // to maintain card spacing
                              prepTime={recipe.preparationMinutes}
                              cookTime={recipe.cookingMinutes}
                              footer={footer}
                          />
                      ))
                    : null
            }
        />
    );
};
