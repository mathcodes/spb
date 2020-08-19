import React from "react";

const css = {
    margin: "0.4em",
};

const CheckBox = ({ text, onClickHandler, checked }) => (
    <label className="checkbox" style={css} onClick={onClickHandler}>
        <input
            type="checkbox"
            value={text}
            checked={checked}
            onChange={() => {}}
        />
        {text}
    </label>
);

export default CheckBox;
