import React from "react";

export default ({ children }) => {
    const CSS = { backgroundColor: "var(--lgreen)" };
    return (
        <section className="App hero is-success is-fullheight" style={CSS}>
            <div className="hero-body">
                <div className="container">{children}</div>
            </div>
        </section>
    );
};
