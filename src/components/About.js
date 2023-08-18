import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I am a programmer and had a goal to get my degree since middle school!</p>
    <img src={image} alt="I made this" />
    </div>;
}

export default About;
