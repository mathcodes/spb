import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppContext from "./utils/AppContext";
// import { useAuth0 } from "@auth0/auth0-react";
// import { v4 as uuid } from "uuid";
import "./App.css";

// Components
import Hero from "./components/Hero";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Library from "./components/Library";
import Settings from "./components/Settings";

export default () => {
    const [state, setState] = useState({
        id: "",
        cuisine: [],
        excludeCuisine: [],
        diet: [],
        intolerances: [],
        includeIngredients: [],
        excludeIngredients: [],
        recipes: [],
        savedRecipes: [],
        activeRecipe: 0,
        activePage: "",
        number: 0,
        offset: 0,
    });

    const dispatch = (payload) => setState({ ...state, ...payload });

    useEffect(() => console.log(state), [state]);
    return (
        <AppContext.Provider value={state}>
            <BrowserRouter>
                <Hero>
                    <>
                        <Route
                            exact
                            path="/search"
                            render={() => <Search dispatch={dispatch} />}
                        />
                        <Route
                            exact
                            path="/library"
                            render={() => <Library />}
                        />
                        <Route
                            exact
                            path="/settings"
                            render={() => <Settings />}
                        />
                        {/* <Route
                                exact
                                path="/details"
                                render={() => <NewDetails />}
                            /> */}
                        <Nav />
                    </>
                </Hero>
            </BrowserRouter>
        </AppContext.Provider>
    );
};
