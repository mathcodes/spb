import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppContext from "./utils/AppContext";
// import { useAuth0 } from "@auth0/auth0-react";
// import { v4 as uuid } from "uuid";
import localforage from "localforage";
import "./App.css";

// Components
import Hero from "./components/Hero";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Library from "./components/Library";
import Settings from "./components/Settings";
import Details from "./components/Details";

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
        number: 6,
        offset: 0,
    });

    const dispatch = (payload) => setState({ ...state, ...payload });

    // Load state from storage on startup
    useEffect(() => {
        localforage
            .getItem(state.id)
            .then((state) => {
                console.log("state loaded", state);
                dispatch(state);
            })
            .catch((err) => console.log(err));
    }, []);

    // Save app state to local and remote storage when it updates
    useEffect(() => {
        localforage
            .setItem(state.id, state)
            .then((state) => console.log("state saved", state))
            .catch((err) => console.log(err));
    }, [state]);
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
                            render={() => <Library dispatch={dispatch} />}
                        />
                        <Route
                            exact
                            path="/settings"
                            render={() => <Settings dispatch={dispatch} />}
                        />
                        <Route
                            exact
                            path="/details"
                            render={() => <Details />}
                        />
                        <Nav />
                    </>
                </Hero>
            </BrowserRouter>
        </AppContext.Provider>
    );
};
