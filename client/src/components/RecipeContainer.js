import React from "react";
import { v4 as uuid } from "uuid";

// Components
import Card from "./Card";
import FlexContainer from "./FlexContainer";

export default ({ dispatch, recipes }) => {
    return (
        <FlexContainer>
            {recipes.map(({ information }) => (
                <Card
                    key={uuid()}
                    dispatch={dispatch}
                    id={information.id}
                    src={information.image}
                    alt={information.name}
                    title={information.name}
                    prepTime={information.prepTime}
                    cookTime={information.cookTime}
                />
            ))}
        </FlexContainer>
    );
};
