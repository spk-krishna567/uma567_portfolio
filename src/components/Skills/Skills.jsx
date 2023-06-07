import React from "react";

import "./Skills.css";

import html from "../../images/html.png";
import css from "../../images/css-3.png";
import javascript from "../../images/js.png";
import reactjs from "../../images/reactjs.png";
import nodejs from "../../images/nodejs.png";
import php from "../../images/php.png";
import figma from "../../images/figma.png";

const Skills = () => {
  return (
    <div className="skills" id="skillspage">
      <div className="skills-heading">Skills </div>
      <div className="skills-subheading">
        I have a vast experience in the following web technologies:
      </div>
      <div className="skills-icons">
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={javascript} alt="js" />
        <img src={reactjs} alt="reactjs" />
        <img src={nodejs} alt="nodejs" />
        <img src={php} alt="php" />
        <img src={figma} alt="figma" />
      </div>
    </div>
  );
};

export default Skills;
