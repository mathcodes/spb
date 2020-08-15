import React, { useState } from "react";

// need to add local and global state to this one
export default ({ methods }) => {
    return (
        <form className="field has-addons" onSubmit={methods.onSubmitHandler}>
            <input className="input" type="text" placeholder="Ingredients" />
            <button className="button is-warning">Add</button>
        </form>
    );
};
