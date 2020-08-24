import React from "react";

export default ({ children }) => {
    const CSS = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: "row",
    };
    return (
        <div className="container" style={CSS}>
            {children}
        </div>
    );
};
