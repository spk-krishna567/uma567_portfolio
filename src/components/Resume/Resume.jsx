import React from "react";

import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume" id="resumepage">
      <div className="resume-heading">
        <span className="html-entity"> &lt;/&gt;</span> Resume{" "}
      </div>
      <div className="resume-subheading">
        You can download my resume by clicking the below button
      </div>
      <div className="button-resume">
        <a href="https://drive.google.com/file/d/1a00Kz66fJmTKK0cUpLSdrCJiMlXfxoI_/view">
          <button className="download-resume">
            <span>Download Resume</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
