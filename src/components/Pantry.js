import React from "react";
import FlexContainer from "./FlexContainer";
import { v4 as uuid } from "uuid";

const Pantry = ({ items, onClickHandler }) => (
    <FlexContainer
        children={
            items
                ? items.map((item) => (
                      <button
                          onClick={onClickHandler}
                          key={uuid()}
                          className="button"
                          style={{ margin: "0.2em" }}>
                          {item}
                      </button>
                  ))
                : null
        }
    />
);

export default Pantry;
