import React from "react";
import { pruneRecipe } from "../utils/ParseRecipe";
import { v4 as uuid } from "uuid";
import FlexContainer from "./FlexContainer";

const detailsCSS = {
    margin: "0.5em",
    color: "black",
    // background: "#48C773",
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
                            <b className="is-size-7-mobile">Nutrition</b>
                        </h1>
                    </caption>
                    <thead>
                        <tr>
                            <th className="is-size-7-mobile">Name</th>
                            <th className="is-size-7-mobile">Amount</th>
                            <th className="is-size-7-mobile">Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rec.nutrients.slice(0, 8).map((item) => (
                            <tr key={uuid()}>
                                <td className="is-size-7-mobile">
                                    {item.name}
                                </td>
                                <td className="is-size-7-mobile">
                                    {item.amount}
                                </td>
                                <td className="is-size-7-mobile">
                                    {item.unit}
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
                                <b className="is-size-7-mobile is-size-3">Ingredients</b>
                            </h1>
                        </caption>
                        <thead>
                            <tr>
                                <th className="is-size-7-mobile">Name</th>
                                <th className="is-size-7-mobile">Amount</th>
                                <th className="is-size-7-mobile">Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rec.usedIngredients.map((item) => (
                                <tr key={uuid()}>
                                    <td className="is-size-7-mobile">
                                        {item.name}
                                    </td>
                                    <td className="is-size-7-mobile">
                                        {item.amount}
                                    </td>
                                    <td className="is-size-7-mobile">
                                        {item.unit}
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
                                <b className="is-size-7-mobile is-size-3">Missing Ingredients</b>
                            </h1>
                        </caption>
                        <thead>
                            <tr>
                                <th className="is-size-7-mobile">Name</th>
                                <th className="is-size-7-mobile">Amount</th>
                                <th className="is-size-7-mobile">Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rec.missedIngredients.map((item) => (
                                <tr key={uuid()}>
                                    <td className="is-size-7-mobile">
                                        {item.name}
                                    </td>
                                    <td className="is-size-7-mobile">
                                        {item.amount}
                                    </td>
                                    <td className="is-size-7-mobile">
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
