import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    return (
        <div className="tabs is-boxed is-fullwidth">
            <ul>
                <li>
                    <a href="/search">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="/library">
                        <i className="fa fa-list" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="/settings">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    {isAuthenticated ? (
                        <a
                            onClick={() =>
                                logout({ returnTo: window.location.origin })
                            }>
                            <i
                                className="fas fa-sign-out-alt"
                                aria-hidden="true"></i>
                        </a>
                    ) : (
                        <a onClick={() => loginWithRedirect()}>
                            <i
                                className="fas fa-sign-in-alt"
                                aria-hidden="true"></i>
                        </a>
                    )}
                </li>
            </ul>
        </div>
    );
};
