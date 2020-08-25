import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Auth0Provider
        domain="dev-4ud-jigw.us.auth0.com"
        clientId="p9lkgV3Ohh7V1lowuxsE96nQTSJt8hGz"
        // redirectUri="https://superpantrybuddy.herokuapp.com/">
        redirectUri="http://localhost:3000">
        <App />
    </Auth0Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
