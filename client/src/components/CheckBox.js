import React from "react";

export default ({ text, onChangeHandler, checked }) => {
    const CSS = { margin: "0.4em" };
    return (
        <label className="checkbox" style={CSS}>
            <input
                type="checkbox"
                value={text}
                checked={checked}
                onChange={onChangeHandler}
            />
            {text}
        </label>
    );
};
