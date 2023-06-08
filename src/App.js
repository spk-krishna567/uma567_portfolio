import React from "react";

import "./App.css";

import Logo from "./components/logo/Logo";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
const App = () => {
  const activating = () => {
    var currentUrl = window.location.href;
    var navLinks = document.querySelectorAll(".nav-Items>ul>li>a");
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i].href === currentUrl) {
        navLinks[i].classList.add("active");
      }
    }
  };
  return (
    <div className="App">
      <Logo />
      <Navbar activate={activating} />
      <div className="Main">
        <Intro />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
};

export default App;
