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
            <a href="#projectspage">Projects</a>
          </li>
          <li>
            <a href="#resumepage">Resume</a>
          </li>
          <li>
            <a href="#contactspage">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
