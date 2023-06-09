import React from "react";

import "./Socialmedia.css";
import { FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail, SiGithub } from "react-icons/si";
const Socialmedia = () => {
  return (
    <div className="socialmedia" id="socialmediapage">
      <div className="socialmedia-heading">
        <span className="html-entity"> &lt;/&gt;</span> Social media{" "}
      </div>
      <div className="socialmedia-box">
        <div className="socialmedia-links">
          <p className="social-subheading">My social media links:</p>
          <div className="socialmedia-links-icons">
            <FaWhatsapp className="media-icons" />{" "}
            <FaLinkedin className="media-icons" />{" "}
            <FaTwitter className="media-icons" />
            <SiGmail className="media-icons" />
          </div>
        </div>
        <div className="github-link">
          <p className="social-subheading">More projects I’ve worked on</p>
          <div className="socialmedia-links-icons">
            <SiGithub className="media-icons-git" />{" "}
            <p className="social-subheading">
              @{" "}
              <a href="https://github.com/spk-krishna567" className="git-link">
                spk-krishna567
              </a>{" "}
              on github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
