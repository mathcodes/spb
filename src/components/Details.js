import React, { Fragment } from "react";
import DetailsTS from "./DetailTS";
import DetailsTitle from "./DetailsTitle";
import DetailsMidRow1 from "./DetailsMidRow1";
import Ingredients from "./Ingredients";
import BasicNutrition from "./BasicNutrition";
import Instructions from "./Instructions";

const detailsCSS = {
  margin: "0.5em",
  color: "black",
  background: "#48C773",
};

const Details = ({
  image,
  title,
  prepTime,
  calories,
  carbs,
  fat,
  protein,
  servings,
}) => (
  <Fragment>
    <div className="tile is-ancestor" style={detailsCSS}>
      <div className="tile is-vertical is-12">
        <DetailsTitle />

        <div className="tile" style={detailsCSS}>
          <DetailsMidRow1 />
          <DetailsTS />
        </div>

        <div className="tile">
          <Ingredients />
          <BasicNutrition />
          </div>
          <Instructions/>        
      </div>
    </div>
    <div className="details" style={detailsCSS}>
      <section>
        <button className="button is-warning">Save</button>
        <button className="button is-warning">Delete</button>
        <button className="button is-warning">Back</button>
      </section>
    </div>
  </Fragment>
);

export default Details;
