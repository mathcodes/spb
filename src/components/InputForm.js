import React, { useState } from "react";

// need to add local and global state to this one
export default () => {
    return (
        <div className="field has-addons">
            <div className="control is-expanded">
                <input
                    className="input"
                    type="text"
                    placeholder="Ingredients"
                />
            </div>
            <div className="control">
                <a href="/search" className="button is-warning">
                    Add
                </a>
            </div>
        </div>
    );
};
