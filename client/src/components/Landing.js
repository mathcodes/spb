import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LogoSmall from "./LogoSmall";

export default () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <h1 className="landingtext">Welcome to...</h1>
            <Link onClick={() => loginWithRedirect()} to="/">
                <LogoSmall />
            </Link>

            <h2 className="landingtext">
                Click the logo above to login and get started!!!
            </h2>
        </>
    );
};
