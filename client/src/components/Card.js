import React from "react";
// import { Link } from "react-router-dom";

export default ({ id, src, alt, title, prepTime, cookTime }) => {
    const CSS = {
        margin: "0.5em",
        background: "#222222",
        color: "var(--dgreen)",
        padding: "1px",
        borderRadius: "3px",
    };
    return (
        <div className="card card-modify" style={CSS}>
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
                    <p>
                        Prep <i className="fas fa-clock"></i> : {prepTime} min
                    </p>
                    <p>
                        Cook <i className="fas fa-clock"></i> : {cookTime} min
                    </p>
                </div>
            </div>
            <footer className="card-foot">
                {/* Conditionally render details, save, delete links here */}
            </footer>
        </div>
    );
};
