import React from "react";
import { v4 as uuid } from "uuid";

// Components
import FlexContainer from "./FlexContainer";

export default ({ items, onClickHandler }) => {
    const CSS = { margin: "0.2em" };
    return (
        <FlexContainer>
            {items.map((item) => (
                <button
                    key={uuid()}
                    className="button"
                    onClick={onClickHandler}
                    style={CSS}>
                    {item}
                </button>
            ))}
        </FlexContainer>
    );
};
