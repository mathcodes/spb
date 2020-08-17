import React from "react";
//need to delete these components later
// import DetailsTS from "./DetailTS";
// import DetailsTitle from "./DetailsTitle";
// import DetailsMidRow1 from "./DetailsMidRow1";
// import Ingredients from "./Ingredients";
// import BasicNutrition from "./BasicNutrition";
// import Instructions from "./Instructions";
import { pruneRecipe } from "../utils/ParseRecipe";
import { v4 as uuid } from "uuid";

const detailsCSS = {
    margin: "0.5em",
    color: "black",
    background: "#48C773",
};

export default ({ recipe }) => {
    const rec = recipe ? pruneRecipe(recipe) : null;
    console.log(rec);
    return (
        <>
            <div className="tile is-ancestor" style={detailsCSS}>
                <div className="tile is-vertical is-12">
                    <div className="tile is-parent" style={detailsCSS}>
                        <article className="tile is-child">
                            <p className="title">
                                {rec ? rec.information.name : null}
                            </p>
                        </article>
                    </div>

                    <div className="tile" style={detailsCSS}>
                        <div className="tile is-parent">
                            <article className="tile is-child">
                                <figure className="headerImage">
                                    <img
                                        alt=" "
                                        src={rec ? rec.information.image : null}
                                    />
                                </figure>
                            </article>
                        </div>
                        <div className="tile is-parent is-vertical">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification">
                                    <ul>
                                        <li>Prep Time: 36 min</li>
                                        <li>Servings: 7</li>
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className="tile">
                        <div className="tile is-parent">
                            <article className="tile is-child notification">
                                <p>You Have:</p>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <abbr title="Name">Name</abbr>
                                            </th>
                                            <th>
                                                <abbr title="Amount">
                                                    Amount
                                                </abbr>
                                            </th>
                                            <th>
                                                <abbr title="Unit">Unit</abbr>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rec
                                            ? rec.usedIngredients.map(
                                                  (item) => (
                                                      <tr key={uuid()}>
                                                          <td>{item.name}</td>
                                                          <td>{item.amount}</td>
                                                          <td>{item.unit}</td>
                                                      </tr>
                                                  )
                                              )
                                            : null}
                                    </tbody>
                                </table>
                                <p>You Need:</p>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <abbr title="Name">Name</abbr>
                                            </th>
                                            <th>
                                                <abbr title="Amount">
                                                    Amount
                                                </abbr>
                                            </th>
                                            <th>
                                                <abbr title="Unit">Unit</abbr>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rec
                                            ? rec.missedIngredients.map(
                                                  (item) => (
                                                      <tr key={uuid()}>
                                                          <td>{item.name}</td>
                                                          <td>{item.amount}</td>
                                                          <td>{item.unit}</td>
                                                      </tr>
                                                  )
                                              )
                                            : null}
                                    </tbody>
                                </table>
                            </article>
                        </div>
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child notification">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <abbr title="Name">Name</abbr>
                                            </th>
                                            <th>
                                                <abbr title="Amount">
                                                    Amount
                                                </abbr>
                                            </th>
                                            <th>
                                                <abbr title="Unit">Unit</abbr>
                                            </th>
                                            <th>
                                                <abbr title="%DV">%DV</abbr>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rec
                                            ? rec.nutrients
                                                  .slice(0, 8)
                                                  .map((item) => (
                                                      <tr key={uuid()}>
                                                          <td>{item.name}</td>
                                                          <td>{item.amount}</td>
                                                          <td>{item.unit}</td>
                                                          <td>{item.dv}</td>
                                                      </tr>
                                                  ))
                                            : null}
                                    </tbody>
                                </table>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification">
                            <p className="title">Directions:</p>
                            <div className="content">
                                <ul>
                                    {rec
                                        ? rec.instructions.map((step) => (
                                              <li key={uuid()}>{step}</li>
                                          ))
                                        : null}
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};
