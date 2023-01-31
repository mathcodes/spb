import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Auth0Provider
        domain="dev-t7jawcee.us.auth0.com"
        clientId="4Sj3xSG8lGxCi51BzJhhsY88dG0QNAis"
        redirectUri="https://saveeatrepeat.vercel.app/">
        <App />
    </Auth0Provider>,
    document.getElementById("root")
);
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
