import React, { useState } from "react";
import { connect } from "react-redux";

// need to add local and global state to this one
// const InputForm = () => {
//     return (
//         <div className="field has-addons">
//             <div className="control is-expanded">
//                 <input
//                     className="input"
//                     type="text"
//                     placeholder="Ingredients"
//                 />
//             </div>
//             <div className="control">
//                 <a href="/search" className="button is-warning">
//                     Add
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default InputForm;
const css = {
    margin: "0.5em",
};

export default
    connect((state) => ({ state: state }))(({ state, dispatch }) => {
    const [input, setInput] = useState([]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: "UPDATE_STATE",
            payload: {
                includedIngredients: [
                    ...new Set([...state.includedIngredients, ...input]),
                ],
            },
        });
        console.log(state);
    };
    const onChangeHandler = (event) => setInput(event.target.value.split(","));
    return (
        <form onSubmit={onSubmitHandler} style={css}>
            <div className="field has-addons">
                <input
                    className="input"
                    type="text"
                    placeholder="Ingredients"
                    onChange={onChangeHandler}
                />
                <button className="button is-warning">Add</button>
            </div>
        </form>
    );
});
