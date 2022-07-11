import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

let Header = () => {
  return (
    <div id = "header-wrapper" className="header-wrapper">
      <Link
        className="hovered-yellow"
        to="intro-wrapper"
        smooth={true}
        duration={1500}
      >
        <div className="header-left-section hovered-yellow">Home</div>
      </Link>

      <div className="header-right-section">
        <Link
          className="hovered-yellow"
          to="about-me"
          smooth={true}
          duration={1500}
        >
          About
        </Link>
        <Link
          className="hovered-yellow"
          to="skills-wrapper"
          smooth={true}
          duration={1500}
        >
          Skills
        </Link>
        <Link
          className="hovered-yellow"
          smooth={true}
          duration={1500}
          to="projects-wrapper"
        >
          Projects
        </Link>
        <Link className="hovered-yellow" smooth={true}
          duration={1500}
          to="contact-wrapper">Contact</Link>
      </div>
      <div className="dropdown-wrapper">
        mobile-responsive
      </div>
    </div>
  );
};

export default Header;
