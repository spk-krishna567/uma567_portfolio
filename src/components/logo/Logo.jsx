import React from "react";
import { FaStream } from "react-icons/fa";

import "./Logo.css";
import profile_logo from "../../images/portlogo.png";
const toggling = () => {
  const name = document.querySelector(".navbar");
  name.style.cssText += "display:flex";
};
const Logo = () => {
  return (
    <div className="logo">
      <FaStream className="bars-nav" onClick={toggling} />
      <img src={profile_logo} alt="profile_logo" className="profile-Logo" />
    </div>
  );
};

export default Logo;
