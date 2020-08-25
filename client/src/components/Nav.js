import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const CSS = { backgroundColor: "#284d1d" };
    return (
        <div className="navbar is-fixed-bottom" style={CSS}>
            <div className="tabs navtabs is-boxed is-fullwidth">
                <ul>
                    <li>
                        <Link to="/search">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/library">
                            <i className="fa fa-list" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <i className="fa fa-cog" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        {isAuthenticated ? (
                            <Link
                                to="/search"
                                onClick={() =>
                                    logout({ returnTo: window.location.origin })
                                }>
                                <i
                                    className="fas fa-sign-out-alt"
                                    aria-hidden="true"></i>
                            </Link>
                        ) : (
                            <Link
                                to="/search"
                                onClick={() => loginWithRedirect()}>
                                <i
                                    className="fas fa-sign-in-alt"
                                    aria-hidden="true"></i>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};
