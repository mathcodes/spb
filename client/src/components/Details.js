import React, { useContext } from "react";
import AppContext from "../utils/AppContext";
import { v4 as uuid } from "uuid";
import LogoSmall from "./LogoSmall"

// Components
import FlexContainer from "./FlexContainer";

export default () => {
    const { recipes, savedRecipes, activeRecipe } = useContext(AppContext);
    const recipe = [...recipes, ...savedRecipes].filter(
        ({ information }) => information.id === activeRecipe
    )[0];

    return (
        <>
        <LogoSmall/>
            {recipe.nutrients.length > 0 ? (
                <FlexContainer>
                    {/* ******************************Nutrition table****************************** */}
                    <table className="table is-fullwidth is-striped is-hoverable">
                        <thead className="is-12 is-fullwidth ">
                            <tr>
                                <th colSpan="3" className="is-12">
                                    Nutrition
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th className="is-6">Name</th>
                                <th className="is-6">Amount</th>
                            </tr>
                            {recipe.nutrients.slice(0, 8).map((item) => (
                                <tr key={uuid()}>
                                    <td>{item.name}</td>
                                    <td>
                                        {item.amount} {item.unit}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </FlexContainer>
            ) : null}

            <br />
            {recipe.usedIngredients.length > 0 ? (
                <FlexContainer>
                    {/* ******************************Owned Ingredients table****************************** */}
                    <table className="table is-fullwidth is-striped is-hoverable">
                        <thead className="is-12 is-fullwidth ">
                            <tr>
                                <th colSpan="2" className="is-12">
                                    Included Ingredients
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                            </tr>
                            {recipe.usedIngredients.map((item) => (
                                <tr key={uuid()}>
                                    <td>{item.name}</td>
                                    <td>
                                        {item.amount} {item.unit}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </FlexContainer>
            ) : null}
            <br />
            {recipe.missedIngredients.length > 0 ? (
                <FlexContainer>
                    {/* ******************************Missing Ingredients table****************************** */}
                    <table className="table is-fullwidth is-striped is-hoverable">
                        <thead className="is-12 is-fullwidth ">
                            <tr>
                                <th colSpan="2" className="is-12">
                                    Missing Ingredients
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                            </tr>
                            {recipe.missedIngredients.map((item) => (
                                <tr key={uuid()}>
                                    <td>{item.name}</td>
                                    <td>
                                        {item.amount} {item.unit}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </FlexContainer>
            ) : null}
            <br />
            {recipe.instructions.length > 0 ? (
                <FlexContainer>
                    <div className="card-details card-instructions is-fullwidth">
                        <div className="card-header">
                            <div className="card-header-title card.details">
                                Instructions
                            </div>
                        </div>
                        <div className="card-content-details has-text-left">
                            <ol>
                                {recipe.instructions.map((step) => (
                                    <li className="instructions" key={uuid()}>
                                        {" "}
                                        <strong>
                                            <input
                                                className="is-large"
                                                type="checkbox"></input>
                                        </strong>{" "}
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </FlexContainer>
            ) : null}
        </>
    );
};
