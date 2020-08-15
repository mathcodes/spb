import React, { useState } from "react";

// need to add local and global state to this one
export default ({ state, methods }) => {
    // return (
    //     <div className="field has-addons">
    //         <div className="control is-expanded">
    //             <input
    //                 className="input"
    //                 type="text"
    //                 placeholder="Ingredients"
    //             />
    //         </div>
    //         <div className="control">
    //             <a href="/search" className="button is-warning">
    //                 Add
    //             </a>
    //         </div>
    //     </div>
    // );
    const onSubmitHandler = methods ? methods.onSubmitHandler : () => {};
    return (
        <form className="field has-addons" onSubmit={onSubmitHandler}>
            <input className="input" type="text" placeholder="Ingredients" />
            <button className="button is-warning">Add</button>
        </form>
    );
};
