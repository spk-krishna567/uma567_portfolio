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
      <div className="skills-heading">
        <span className="html-entity"> &lt;/&gt;</span> Skills{" "}
      </div>
      <div className="skills-subheading">
        I have a vast experience in the following web technologies:
      </div>
      <div className="skills-icons">
        <div>
          <img src={html} alt="html" />
          <div className="skill-text">Html</div>
        </div>
        <div>
          <img src={css} alt="css" />
          <div className="skill-text">Css</div>
        </div>
        <div>
          <img src={javascript} alt="js" />
          <div className="skill-text">javascript</div>
        </div>
        <div>
          <img src={reactjs} alt="reactjs" />
          <div className="skill-text">React js</div>
        </div>
        <div>
          <img src={nodejs} alt="nodejs" />
          <div className="skill-text">Node.js</div>
        </div>
        <div>
          <img src={php} alt="php" />
          <div className="skill-text">Php</div>
        </div>
        <div>
          <img src={figma} alt="figma" />
          <div className="skill-text">Figma</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
