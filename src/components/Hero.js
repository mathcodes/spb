import React from "react";

export default ({ header, children, footer }) => (
    <section className="hero is-success is-fullheright">
        <div className="hero-head">{header}</div>
        <div className="hero-body">
            <div className="container">{children}</div>
        </div>
        <div className="hero-foot">{footer}</div>
    </section>
);
