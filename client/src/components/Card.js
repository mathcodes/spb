import React from "react";
import "../App.css";

const css = {
    margin: "0.5em",
    background: "#222222",
    color: "var(--dgreen)",
    padding: "1px",
};

export default ({ src, alt, title, prepTime, cookTime, footer }) => {
    return (
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
                <div className="content">
                    <p>prep time: {prepTime} minutes</p>
                    <p>cook time: {cookTime} minutes</p>
                </div>
            </div>
            <footer className="card-footer">
                <button className="button is-warning is-fullwidth">
                    Details
                </button>
                {footer === "search" ? (
                    <button className="button is-warning is-fullwidth">
                        Save
                    </button>
                ) : footer === "library" ? (
                    <button className="button is-warning is-fullwidth">
                        Delete
                    </button>
                ) : null}
            </footer>
        </div>
    );
};
