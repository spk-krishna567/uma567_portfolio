import React from "react";

import "./Logo.css";
import profile_logo from "../../images/portlogo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={profile_logo} alt="profile_logo" className="profile-Logo" />
    </div>
  );
};

export default Logo;
