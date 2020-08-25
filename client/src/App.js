import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppContext from "./utils/AppContext";
import { useAuth0 } from "@auth0/auth0-react";
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
    });

    const dispatch = (payload) => setState({ ...state, ...payload });

    const { isAuthenticated, user } = useAuth0();

    // If user is Authenticated load state from server else load
    // from local storage
    useEffect(() => {
        if (isAuthenticated) {
            dispatch({ id: user.email });
            fetch("/db/get", { id: user.email })
                .then((state) => dispatch(state))
                .then(() => console.log("data loaded from server storage"))
                .catch((err) => console.log(err));
        } else {
            localforage
                .getItem("local")
                .then((state) => dispatch(state))
                .then(() => console.log("data loaded from local storage"))
                .catch((err) => console.log(err));
        }
    }, [isAuthenticated]);

    // When the state is updated save it to local and server storage
    useEffect(() => {
        console.log(state);
        if (isAuthenticated) {
            fetch("/db/set", {
                method: "POST",
                headers: { "Content-Type": "application.json" },
                body: JSON.stringify(state),
            })
                .then(() => console.log("data saved to server storage"))
                .catch((err) => console.log(err));
            localforage
                .setItem("local", state)
                .then(() => console.log("data saved to local storage"))
                .catch((err) => console.log(err));
        }
    }, [state]);

    return (
        <AppContext.Provider value={state}>
            <BrowserRouter>
                <Hero>
                    <>
                        <Route
                            exact
                            path={["/", "/search"]}
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
