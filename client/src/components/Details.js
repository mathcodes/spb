import React, { useContext } from "react";
import AppContext from "../utils/AppContext";
import { v4 as uuid } from "uuid";
import LogoSmall from "./LogoSmall"

// Components
import FlexContainer from "./FlexContainer";

export default async () => {
    const { recipes, savedRecipes, activeRecipe } = useContext(AppContext);
    const recipe = [...recipes, ...savedRecipes].filter(
        ({ information }) => information.id === activeRecipe
    )[0];
        
    return (
        <>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                            <p class="title">Vertical...</p>
                            <p class="subtitle">Top tile</p>
                        </article>
                        <article class="tile is-child notification is-warning">
                            <p class="title">...tiles</p>
                            <p class="subtitle">Bottom tile</p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                            <p class="title">Middle tile</p>
                            <p class="subtitle">With an image</p>
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png"/>
                            </figure>
                        </article>
                    </div>
                </div>

                <div class="tile is-parent">
                <article class="tile is-child notification is-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div class="content">
                        <!-- Content -->
                    </div>
                </article>
                </div>
            </div>

            <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                    <div class="content">
                        <p class="title">Tall tile</p>
                        <p class="subtitle">With even more content</p>
                        <div class="content">
                            <!-- Content -->
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Hello World</p>
      <p class="subtitle">What is up?</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Foo</p>
      <p class="subtitle">Bar</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Third column</p>
      <p class="subtitle">With some content</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
</div>

<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child box">
          <p class="title">Vertical tiles</p>
          <p class="subtitle">Top box</p>
        </article>
        <article class="tile is-child box">
          <p class="title">Vertical tiles</p>
          <p class="subtitle">Bottom box</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Middle box</p>
          <p class="subtitle">With an image</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png">
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Wide column</p>
        <p class="subtitle">Aligned with the right column</p>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <div class="content">
        <p class="title">Tall column</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
          <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
          <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
        </div>
      </div>
    </article>
  </div>
</div>

<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Side column</p>
      <p class="subtitle">With some content</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
  <div class="tile is-parent is-8">
    <article class="tile is-child box">
      <p class="title">Main column</p>
      <p class="subtitle">With some content</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
</div>


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
