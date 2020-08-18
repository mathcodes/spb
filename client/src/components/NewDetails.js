import React from "react";
import { pruneRecipe } from "../utils/ParseRecipe";
import { v4 as uuid } from "uuid";
import FlexContainer from "./FlexContainer";
import Logo from "./Logo";

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
            <Logo/>
            {/* Nutrition table */}
            {rec && rec.nutrients.length > 0 ? (
                <table className="table is-fullwidth">
                    <caption>
                        <h1>
                            <b>Nutrition</b>
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
                {/* Owned ingredients table */}
                {rec && rec.usedIngredients.length > 0 ? (
                    <table className="table is-fullwidth">
                        <caption>
                            <h1>
                                <b>Ingredients</b>
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
                {/* Missing ingredients table */}
                {rec && rec.missedIngredients.length > 0 ? (
                    <table className="table is-fullwidth">
                        <caption>
                            <h1>
                                <b>Missing Ingredients</b>
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
                <div className="card ">
                    <div className="card-header Instructionscard">
                        <div className="card-header-title">Instructions</div>
                    </div>
                    <div className="card-content">
                        {rec && rec.instructions.length > 0 ? (
                            <ol>
                                {rec.instructions.map((step) => (
                                    <li key={uuid()}>{step}</li>
                                ))}
                            </ol>
                        ) : null}
                    </div>
                </div>
            </FlexContainer>
        </>
    );
};
