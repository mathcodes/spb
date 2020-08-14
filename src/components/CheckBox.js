import React from "react";

const css = { margin: "0.4em" };

const CheckBox = ({ text }) => (
    <label className="checkbox" style={css}>
        <input type="checkbox" />
        {text}
    </label>
);

export default CheckBox;
