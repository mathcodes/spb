import React from "react";

const detailsCSS = {
  margin: "0.5em",
  color: "black",
  background: "#48C773",
};

const Instructions = () => (

    <div className="tile is-parent">
        <article className="tile is-child notification">
            <p className="title">Directions:</p>
            <div className="content">
                Instructions go here. Step 1: turn it off and then back on again.
                Step 2: call IT.
            </div>
        </article>
    </div>
);
export default Instructions;