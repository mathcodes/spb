import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <h1 className="landingtext">Welcome to SUPER PANTRY BUDDY!!!</h1>
            

            <h2 className="landingtext">
                To get started, click the <i
                            className="fas fa-sign-in-alt tabicon"
                            aria-hidden="true"></i> on the bottom right of the screen above to login and get started!!!
            </h2>
        </>
    );
};
