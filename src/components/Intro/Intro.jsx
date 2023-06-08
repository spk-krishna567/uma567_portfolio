import React from "react";

import "./Intro.css";
import profile_pic from "../../images/profile_image.png";

const Intro = () => {
  return (
    <div className="intro" id="homepage">
      <div className="elipse1"></div>
      <div className="intro-combo">
        <div className="intro-Sentence">
          <span className="intro-Namebefore">Hi👋 </span>
          <span className="intro-Namemain">
            ,I'm a <br />
            Web Developer
          </span>
        </div>

        <div className="intro-Description">
          I’m{" "}
          <span className="intro-Profilename">Tarugu Uma Maheswar Reddy</span>,
          {/* a developer dedicated to making the world a better place one line of
          code at a time. */}
          a developer knows he has achieved perfection not when there is nothing
          left to add, but when there is nothing left to take away
        </div>
        <a href="https://www.linkedin.com/in/tarugu-uma-maheswar-reddy-b965a2244">
          <button className="button-Hire">Hire Me</button>
        </a>
      </div>
      <img src={profile_pic} alt="profilepic" className="profile-Pic" />
    </div>
  );
};

export default Intro;
