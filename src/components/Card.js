import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import "../App.css";

const css = {
    margin: "0.5em",
    background: "#222222",
    color: "var(--dgreen)",
    padding: "1px",
};

const Card = ({ src, alt, title, prepTime }) => (
    <div className="card" style={css}>
        <div className="card-image">
            <figure className="image">
                <img src={src} alt={alt} />
            </figure>
        </div>

<header className="card-header">
            <p className="card-header-title is-centered">{title}</p>
        </header>

        <div className="card-content">
            <div className="content">{prepTime}</div>
        </div>

        <footer className="card-footer">
            <a href="placeholder" className="card-footer-item">
                Save
            </a>

            <a href="/details" className="card-footer-item">
                Details
            </a>
        </footer>
    </div>
);

export default Card;
