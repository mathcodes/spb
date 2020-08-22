import React from "react";
import { pruneRecipe } from "../utils/ParseRecipe";
import { v4 as uuid } from "uuid";
import FlexContainer from "./FlexContainer";
import Logo from "./Logo";

export default ({ recipe }) => {
    const rec = recipe ? pruneRecipe(recipe) : null;
    console.log(rec);
    return (
        <>
            {" "}
            <Logo />
            {/* ******************************Nutrition table****************************** */}
            {rec && rec.nutrients.length > 0 ? (
                <table className="table is-fullwidth is-striped is-hoverable">
                    <thead className="is-12 is-fullwidth ">
                        <td colSpan="3" className="is-12">
                            Nutrition
                        </td>
                    </thead>

                    <tbody>
                        <tr>
                            <th className="is-6">Name</th>
                            <th className="is-6">Amount</th>
                        </tr>
                        {rec.nutrients.slice(0, 8).map((item) => (
                            <tr key={uuid()}>
                                <td className="is-6">{item.name}</td>
                                <td className="is-6">
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
                        <thead className="is-2 is-fullwidth ">
                            <th colSpan="3">Included Ingredients</th>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="is-3">Name</th>
                                <th colspan="2" className="is-3">
                                    Amount
                                </th>
                            </tr>
                            {rec.usedIngredients.map((item) => (
                                <tr key={uuid()}>
                                    <td className="is-3">{item.name}</td>
                                    <td className="is-3">
                                        {item.amount} {item.unit}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : null}
            </FlexContainer>
            <br />
            <FlexContainer>
                {/* ******************************Missing Ingredients table****************************** */}
                {rec && rec.missedIngredients.length > 0 ? (
                    <table className="table tableMissing is-fullwidth is-striped is-hoverable">
                        {/* <caption>
                            <h1>
                                <b className="is-3">Missing Ingredients</b>
                            </h1>
                        </caption> */}
                        <thead className="is-2 is-fullwidth ">
                            <th colSpan="3">Missing Ingredients</th>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="is-3">Name</th>
                                <th colspan="2" className="is-3">
                                    Amount
                                </th>
                            </tr>
                            {rec.missedIngredients.map((item) => (
                                <tr key={uuid()}>
                                    <td className="is-3">{item.name}</td>
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
                <div className="card card-instructions">
                    <div className="card-header">
                        <div className="card-header-title card.details">
                            Instructions
                        </div>
                    </div>
                    <div className="card-content-details">
                        {rec && rec.instructions.length > 0 ? (
                            <ol>
                                {rec.instructions.map((step) => (
                                    <li class="instructions" key={uuid()}>
                                        {" "}
                                        <strong>
                                            <input
                                                class="is-large"
                                                type="checkbox"></input>
                                        </strong>{" "}
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        ) : null}
                    </div>
                </div>
            </FlexContainer>
        </>
    );
};
