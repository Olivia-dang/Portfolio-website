import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="header-nav">
        <a href="index.html" className="branding-logo">
          <img
            src="images/small-psyduck.png"
            alt="psyduck"
            height="70"
            width="57"
          />
        </a>
        <ul className="header-nav--sitemap">
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/experience">EXPERIENCE</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
