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
            <h1>REcipe Details</h1>

            <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        
                        <div className="tile is-parent is-vertical">
                            
                            <article className="tile is-child notification tileStyles">
                                <p className="title">
                                    Nutrition Facts:
                                        {recipe.nutrients.map((item) => (
                                            <span key={uuid()} class="tags has-addons"><span class="tag is-dark">{item.name}</span><span class="tag is-info">{item.amount} {item.unit}</span></span>
                                        ))} 
                                </p> 
                            </article>
                                    
                            <article className="tile is-child notification">
                                <div class="title field is-grouped is-grouped-multiline">
                                    Missing Ingredients:
                                    <div class="control">
                                        {recipe.usedIngredients.map((item) => (
                                            <span key={uuid()} class="tags has-addons"><span class="tag is-dark">{item.name}</span><span class="tag is-info">{item.amount} {item.unit}</span></span>
                                        ))}
                                    </div>
                                </div>
                            </article>

                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification">
                                <p className="title">Middle tile</p>
                                <p className="subtitle">With an image</p>
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification">
                            <p className="title">Wide tile</p>
                            <p className="subtitle">Aligned with the right tile</p>
                            <div className="content">
                            </div>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification">
                        <div className="content">
                            <p className="title">Tall tile</p>
                            <p className="subtitle">With even more content</p>
                            <div className="content">
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            {recipe.nutrients.length > 0 ? () : null}

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
                            <div class="field is-grouped is-grouped-multiline">
                                <div class="control">
                                    {recipe.usedIngredients.map((item) => (
                                        <div key={uuid()} class="tags has-addons">
                                            <span class="tag is-dark">{item.name}</span>
                                            <span class="tag is-info">{item.amount} {item.unit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
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
