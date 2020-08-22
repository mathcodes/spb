const express = require("express");
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
    instructionsRequired: true,
    fillIngredients: true,
    addRecipeInformation: true,
    addRecipeNutrition: true,
    sort: "min-missing-ingredients",
    sortDirection: "asc",
    ignorePantry: true,
};

app.post("/api/search", (req, res) => {
    console.log(req.body);
    getRecipes({ ...req.body, ...params }).then((recipes) => {
        res.json(recipes);
    });
});

// Mongoose Stuff
const mongoose = require("mongoose");
const User = require("./Models/user");
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/superpantrybuddy",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.post("/db/set", async (req, res) => {
    //check if a document with given id exists
    if (await User.exists({ id: req.body.id })) {
        console.log("user exists");
        User.update({ id: req.body.id }, { ...req.body });
    } else {
        console.log("created new user");
        User.create({ ...req.body });
    }
    res.sendStatus(200);
});

app.post("/db/get", async (req, res) => {
    res.json(await User.find({ id: req.body.id }));
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
