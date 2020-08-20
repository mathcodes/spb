const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
require("dotenv").config();
const fetch = require("node-fetch");
const url = "https://api.spoonacular.com/recipes/complexSearch";
const getRecipes = (params) => {
    let url_ = new URL(url);
    Object.keys(params).forEach((key) =>
        url_.searchParams.append(key, params[key])
    );
    return fetch(url_).then((response) => response.json());
};

// These search params are set server side as there
// is no reason for users to set them
const params = {
    apiKey: process.env.apiKey,
    instructionsRequired: false,
    fillIngredients: true,
    addRecipeInformation: true,
    addRecipeNutrition: true,
    sort: "random",
    ignorePantry: true,
};

app.post("/api/search", (req, res) => {
    console.log(req.body);
    getRecipes({ ...req.body, ...params }).then((recipes) => {
        res.json(recipes);
    });
});

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
