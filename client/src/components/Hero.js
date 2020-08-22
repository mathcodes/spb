import React from "react";

const Hero = ({ header, body, footer }) => (
    <section
        className="hero is-success is-fullheight"
        style={{
            backgroundImage:
                "url(" + "./../assets/img/TALLPANTRYGRASS.png" + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
        {/* <div className="hero-head">{header}</div> */}
        <div className="hero-body">
            <div className="container">{body}</div>
        </div>
        <div className="hero-foot">{footer}</div>
    </section>
);

export default Hero;
