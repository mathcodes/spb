import React from "react";
import { pruneRecipe } from "../utils/ParseRecipe";
import { v4 as uuid } from "uuid";
import FlexContainer from "./FlexContainer";

const detailsCSS = {
    margin: "0.5em",
    color: "black",
    // background: "#48C443",
};

export default ({ recipe }) => {
    const rec = recipe ? pruneRecipe(recipe) : null;
    console.log(rec);
    return (
        <>
{/* ******************************Nutrition table****************************** */}
            {rec && rec.nutrients.length > 0 ? (
                <table className="table is-fullwidth is-striped is-hoverable">
                  <caption>
                            <h1>
                                <b className="is-12">Nutrition</b>
                            </h1>
                        </caption>
                        <thead>
                            <tr>
                                <th className="is-3">Name</th>
                                <th className="is-3">Amount</th> 
                            </tr>
                        </thead>
                    <tbody>
                        {rec.nutrients.slice(0, 8).map((item) => (
                            <tr key={uuid()}>
                                <td className="is-3">
                                    {item.name}
                                </td>
                                <td className="is-3">
                                    {item.amount} {item.unit}
                                </td>
                                 
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}

            <FlexContainer>
{/* ******************************Owned Ingredients table****************************** */}
                {rec && rec.usedIngredients.length > 0 ? (
                    <table className="table tableNutrition is-fullwidth is-striped is-hoverable">
                        <caption>
                            <h1>
                                <b className="is-12">Ingredients</b>
                            </h1>
                        </caption>
                        <thead>
                            <tr>
                                <th className="is-3">Name</th>
                                <th className="is-3">Amount</th>
                                 
                            </tr>
                        </thead>
                        <tbody>
                            {rec.usedIngredients.map((item) => (
                                <tr key={uuid()}>
                                    <td className="is-3">
                                        {item.name}
                                    </td>
                                    <td className="is-3">
                                        {item.amount} {item.unit}
                                    </td>
                                     
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : null}
            </FlexContainer>

            <FlexContainer>
{/* ******************************Missing Ingredients table****************************** */}
                {rec && rec.missedIngredients.length > 0 ? (
                    <table className="table tableMissing is-fullwidth is-striped is-hoverable">
                        <caption>
                            <h1>
                                <b className="is-3">Missing Ingredients</b>
                            </h1>
                        </caption>
                        <thead>
                            <tr>
                                <th className="is-3">Name</th>
                                <th className="is-3">Amount</th>
                                <th className="is-3">Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rec.missedIngredients.map((item) => (
                                <tr key={uuid()}>
                                    <td className="is-3">
                                        {item.name}
                                    </td>
                                    <td className="is-3">
                                        {item.amount}
                                    </td>
                                    <td className="is-3">
                                        {item.unit}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : null}
            </FlexContainer>
            <FlexContainer>
                <div className="card card-instructions">
                    <div className="card-header">
                        <div className="card-header-title card.details">Instructions</div>
                    </div>
                    <div className="card-content-details">
                        {rec && rec.instructions.length > 0 ? (
                            <ol>
                                {rec.instructions.map((step) => (
                                    <li class="instructions" key={uuid()}> <input class="is-large" type="checkbox"></input> {step}</li>
                                ))}
                            </ol>
                        ) : null}
                    </div>
                </div>
            </FlexContainer>
        </>
    );
};
