const express = require("express");
const mongoose = require("mongoose");
const fetch = require("node-fetch");
const User = require("./Models/user");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://user:user@devconnection.xzy3k.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Routes
app.post("/api/search", async (req, res) => {
    let url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    const params = { ...req.body, apiKey: process.env.apiKey };

    Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
        
    );
    await 
    // fetch ('https://api.spoonacular.com/recipes/complexSearch?apiKey=30f3274cbfe143059c9b4053147fba68&includeNutrition=true')
    fetch(url)
        .then((response) => response.json())
        .then((results) => (
            console.log(results),
            res.json(results))
        )
        .catch((err) => console.log(err));

res.json({ results: "test" });
});

// This route isn't working on deployed app
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
