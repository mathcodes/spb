import React, { useEffect, useState } from "react";

export default () => {
    // Define our initial state
    const initialState = {
        cuisine: [],
        excludeCuisine: [],
        diet: [],
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
    // Pass state management object as a prop to all descendents
    // that need to access app state
    return <></>;
};
