import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { getItem, setItem } from "localforage";

// Components
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import Search from "./components/Search";
import Landing from "./components/Landing";
import Settings from "./components/Settings";
import NewDetails from "./components/NewDetails";
import { v4 as uuid } from "uuid";
import "./App.css";

// Other Stuff
import MenuTabs from "./assets/js/MenuTabs";
import Library from "./components/Library";

export default () => {
    // Define our initial state
    const initialState = {
        id: "",
        cuisine: [],
        excludeCuisine: [],
        diet: [],
        intolerances: [],
        includeIngredients: [],
        excludeIngredients: [],
        recipes: [" "],
        savedRecipes: [],
        activeRecipe: 0,
    };
    // Create state object and setter function
    const [getState, setState] = useState(initialState);
    // Load state from local storage on startup
    useEffect(() => {
        const loadedState = JSON.parse(localStorage.getItem("state"));
        if (loadedState) setState(loadedState);
    }, []);

    // Package it all up into an elegantly named object
    const state = {
        get: getState,
        set: (payload) => setState({ ...getState, ...payload }),
    };
    // Save state to local storage when it's updated
    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(getState));
        console.log(state.get);
    }, [getState, state.get]);
    return (
        <BrowserRouter>
            <Hero
                className="App"
                style={{ backgroundColor: "var(--lgreen)" }}
                header={
                    <div
                        key={uuid()}
                        className="navbar is-fixed-bottom"
                        style={{ backgroundColor: "var(--lgreen)" }}>
                        <Tabs tabs={MenuTabs} />
                    </div>
                }
                body={
                    <>
                        <Route
                            exact
                            path={["/", "/search"]}
                            render={() => <Search state={state} />}
                        />
                        <Route
                            exact
                            path="/library"
                            render={() => <Library state={state} />}
                        />
                        <Route
                            exact
                            path="/settings"
                            render={() => <Settings state={state} />}
                        />
                        <Route
                            exact
                            path="/landing"
                            render={() => <Landing state={state} />}
                        />
                        <Route
                            exact
                            path="/details"
                            render={() => (
                                <NewDetails
                                    recipe={
                                        [
                                            ...getState.recipes,
                                            ...getState.savedRecipes,
                                        ].filter(
                                            (recipe) =>
                                                recipe.id ===
                                                getState.activeRecipe
                                        )[0]
                                    }
                                />
                            )}
                        />
                        <div
                            key={uuid()}
                            className="navbar is-fixed-bottom"
                            style={{ backgroundColor: "#284d1d" }}>
                            <Tabs tabs={MenuTabs} />
                        </div>{" "}
                    </>
                }
            />
        </BrowserRouter>
    );
};
