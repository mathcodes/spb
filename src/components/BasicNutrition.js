import React from "react";

const detailsCSS = {
  margin: "0.5em",
  color: "black",
  background: "#48C773",
};

const BasicNutrition = () => (
  <div className="tile is-parent is-vertical">
    <article className="tile is-child notification"  >
      <ul>
        <li>Calories: 12,000,000</li>
        <li>Carbs: 45 pinches</li>
        <li>Fat: so</li>
        <li>Protein: lots</li>
      </ul>
    </article>
  </div>
);

export default BasicNutrition;
