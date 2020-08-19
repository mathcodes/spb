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
                <table className="table is-fullwidth is-striped is-hoverable">
                    <caption>
                        <h1>
                            <b>Nutrition</b>
                        </h1>
                    </caption>
                    <thead>
                        <tr>
                            <th className="is-size-6-mobile">Name</th>
                            <th className="is-size-3-mobile">Amount</th>
                            <th className="is-size-3-mobile">Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rec.nutrients.slice(0, 8).map((item) => (
                            <tr key={uuid()}>
                                <td className="is-size-6-mobile">
                                    {item.name}
                                </td>
                                <td className="is-size-3-mobile">
                                    {item.amount}
                                </td>
                                <td className="is-size-3-mobile">
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
                    <table className="table is-fullwidth is-striped is-hoverable">
                        <caption>
                            <h1>
                                <b>Ingredients</b>
                            </h1>
                        </caption>
                        <thead>
                            <tr>
                                <th className="is-size-6-mobile">Name</th>
                                <th className="is-size-3-mobile">Amount</th>
                                <th className="is-size-3-mobile">Unit</th>
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
                    <table className="table is-fullwidth is-striped is-hoverable">
                        <caption>
                            <h1>
                                <b>Missing Ingredients</b>
                            </h1>
                        </caption>
                        <thead>
                            <tr>
                                <th className="is-size-6-mobile">Name</th>
                                <th className="is-size-3-mobile">Amount</th>
                                <th className="is-size-3-mobile">Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rec.missedIngredients.map((item) => (
                                <tr key={uuid()}>
                                    <td className="is-size-6-mobile">
                                        {item.name}
                                    </td>
                                    <td className="is-size-3-mobile">
                                        {item.amount}
                                    </td>
                                    <td className="is-size-3-mobile">
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
                {rec && rec.instructions.length > 0 ? (
                        <table className="Inst-table is-fullwidth is-hoverable">
                            <caption>
                                <h1>
                                    <b>Instructions</b>
                                </h1>
                            </caption>
                        
                            <tbody>
                                {rec && rec.instructions.length > 0 ? (
                                <ol><strong>
                                    {rec.instructions.map((step) => (
                                        <li key={uuid()}>{step}</li>
                                    ))}
                                    </strong>
                                </ol>
                            ) : null}
                            </tbody>
                        </table>
                    ) : null}
            </FlexContainer>


        </>
    );
};
