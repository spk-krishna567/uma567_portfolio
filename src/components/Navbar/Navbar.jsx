import React from "react";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="nav-Items" onLoad={props.activate}>
        <ul>
          <li>
            <a href="#homepage">Home</a>
          </li>
          <li>
            <a href="#skillspage">Skills</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
