import React from "react";

export default ({ submitHandler }) => {
    return (
        <form className="field has-addons" onSubmit={submitHandler}>
            <input className="input" type="text" placeholder="Ingredients" />
            <button className="add-button">Add</button>
        </form>
    );
};
