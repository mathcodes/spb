import React from "react";

<<<<<<< HEAD
export default ({ header, children, footer }) => (
    <section className="hero is-success is-fullheright">
        <div className="hero-head">{header}</div>
        <div className="hero-body">
            <div className="container">{children}</div>
=======
const Hero = ({ header, body, footer }) => (
    <section className="hero is-success is-fullheight">
        <div className="hero-head">{header}</div>
        <div className="hero-body">
            <div className="container">{body}</div>
>>>>>>> origin/master
        </div>
        <div className="hero-foot">{footer}</div>
    </section>
);
<<<<<<< HEAD
=======

export default Hero;
>>>>>>> origin/master
