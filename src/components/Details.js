import React, { Fragment } from "react";
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
                <div className="tile is-parent" style={detailsCSS}>
                    <article className="tile is-child">
                        <p className="title">Longpig Stew {title}</p>
                    </article>
                </div>
                <div className="tile" style={detailsCSS}>
                    <div className="tile is-parent">
                        <article className="tile is-child">
                            <figure className="image is-4by3">
                                <img
                                    alt=" "
                                    src="https://bulma.io/images/placeholders/640x480.png"
                                />
                            </figure>
                        </article>
                    </div>
                    <div className="tile is-parent is-vertical">
                        <article
                            className="tile is-child notification"
                            style={detailsCSS}>
                            <ul>
                                <li>Prep Time: {prepTime}</li>
                                <li>Carbs: {servings}</li>
                            </ul>
                        </article>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile is-parent">
                        <article
                            className="tile is-child notification"
                            style={detailsCSS}>
                            <ul>
                                <li>ingredient1placeholder</li>
                                <li>ingredient2placeholder</li>
                                <li>ingredient3placeholder</li>
                                <li>ingredient4placeholder</li>
                            </ul>
                        </article>
                    </div>
                    <div className="tile is-parent is-vertical">
                        <article
                            className="tile is-child notification"
                            style={detailsCSS}>
                            <ul>
                                <li>Calories: {calories}</li>
                                <li>Carbs: {carbs}</li>
                                <li>Fat: {fat}</li>
                                <li>Protein: {protein}</li>
                            </ul>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article
                        className="tile is-child notification"
                        style={detailsCSS}>
                        <p className="title">Directions:</p>
                        <div className="content">
                            Instructions go here. Step 1: turn it off and then
                            back on again. Step 2: call IT.
                        </div>
                    </article>
                </div>
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
