import React from "react";
import Image from "../assets/img/SPBlarge.png";

const css = {
    width: "33%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
};

export default () => (
    <>
        <figure className="image is-100by100">
            <img src={Image} alt="super pantry buddy logo" style={css} />
        </figure>
    </>
);
