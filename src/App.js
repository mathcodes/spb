<<<<<<< HEAD
import React, { useEffect, useState } from "react";

//components
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import Details from "./components/Details";

const tabs = [
    {
        text: "Search",
        href: "#",
    },
    {
        text: "Library",
        href: "#",
    },
    {
        text: "Settings",
        href: "#",
    },
];
=======
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Tabs from "./components/Tabs";
import Search from "./components/Search";
import Settings from "./components/Settings";
import Details from "./components/Details";
import { v4 as uuid } from "uuid";
import "./App.css";

// Other Stuff
import MenuTabs from "./assets/js/MenuTabs";
import Library from "./components/Library";
>>>>>>> origin/master

export default () => {
    // Define our initial state
    const initialState = {
<<<<<<< HEAD
        cuisine: [],
        excludeCuisine: [],
        diet: [],
=======
        cuisines: [],
        excludedCuisines: [],
        diets: [],
>>>>>>> origin/master
        intolerances: [],
        includedIngredients: [],
        excludedIngredients: [],
        recipes: [],
    };
    // Create state object and setter function
    const [getState, setState] = useState(initialState);
    // Load state from local storage on startup
    useEffect(() => {
        const loadedState = JSON.parse(localStorage.getItem("state"));
        if (loadedState) setState(loadedState);
    }, []);
    // Save state to local storage when it's updated
    useEffect(() => localStorage.setItem("state", JSON.stringify(getState)), [
        getState,
    ]);
    // Package it all up into an elegantly named object
    const state = {
        get: getState,
        set: (payload) => setState({ ...getState, ...payload }),
    };
<<<<<<< HEAD
    // Pass state management object as a prop to all descendents
    // that need to access app state
    return <Hero header={<Tabs tabs={tabs} />} children={<Details />} />;
=======

    return (
        <BrowserRouter>
            <Hero
                header={[
                    <Logo key={uuid()} />,
                    <div
                        key={uuid()}
                        className="navbar is-fixed-top"
                        style={{ backgroundColor: "#48c774" }}>
                        <Tabs tabs={MenuTabs} />
                    </div>,
                ]}
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
                            path="/Details"
                            render={() => <Details state={state} />}
                        />
                    </>
                }
            />
        </BrowserRouter>
    );
>>>>>>> origin/master
};
