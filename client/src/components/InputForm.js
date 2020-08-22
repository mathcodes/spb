import React from "react";

// need to add local and global state to this one
export default ({ onSubmitHandler }) => {
    return (
        <form className="field has-addons" onSubmit={onSubmitHandler}>
            <input className="input" type="text" placeholder="Ingredients" />
            <button className="details-button">Add</button>
        </form>
    );
};
