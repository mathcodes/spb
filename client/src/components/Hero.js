import React from "react";

<<<<<<< HEAD
const Hero = ({ body, footer }) => (
    <section className="hero is-success is-fullheight">
        <div className="hero-head">{header}</div>
=======




const Hero = ({ header, body, footer }) => (
    <section className="hero is-success is-fullheight" style={{  
  backgroundImage: "url(" + "./../assets/img/TALLPANTRYGRASS.png" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
        {/* <div className="hero-head">{header}</div> */}
>>>>>>> fcd5d91dc9e13f231239da58f1085ddadffcb3fa
        <div className="hero-body">
            <div className="container">{body}</div>
        </div>
        <div className="hero-foot">{footer}</div>
    </section>
);

export default Hero;
