import React from "react";

export default ({ text }) => {
    const CSS = { margin: "0.4em" };
    return (
        <label className="checkbox" style={CSS}>
            <input type="checkbox" value={text} />
            {text}
        </label>
    );
};
