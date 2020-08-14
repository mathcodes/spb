import React from "react";

const css = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
};

const FlexContainer = ({ children }) => (
    <div className="container" style={css}>
        {children}
    </div>
);

export default FlexContainer;
