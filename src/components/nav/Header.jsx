import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";

export default function Header() {
  // using React hooks to create a clicked or unclicked state as a boolean
  const [click, setClick] = useState(false);

  // closeMobileMenu function is just setting our clicked state to false
  // as when a user clicks on a menu-item in mobile view we want to close the menu
  const closeMobileMenu = () => setClick(false);

  // handleClick is going to toggle our clicked state on and off
  const handleClick = () => setClick(!click);

  return (
    <nav className="header" id="myTopnav">
        <div className="nav-left">
          <a href="/" className="logo">
            LOGO
          </a>
        </div>
        <div className="nav-right">
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/home" className="option-link">HOME</Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/experience"className="option-link">EXPERIENCE</Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/projects"className="option-link">PROJECTS</Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/contact"className="option-link">CONTACT</Link>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </div>
    </nav>
  );
  // return (
  //   <nav className="header">
  //     <div className="logo-nav">
  //       <div className="logo-container">
  //         <Link to="/home" className="option" onClick={closeMobileMenu}>
  //           <img
  //             src="images/small-psyduck.png"
  //             alt="logo"
  //             height="70"
  //             width="57"
  //             className="logo"
  //           />
  //         </Link>

  //       </div>
  //       <div className="links-nav">
  //         <ul className={click ? "nav-options active" : "nav-options"}>
  //           <li className="option" onClick={closeMobileMenu}>
  //             <Link to="/home">HOME</Link>
  //           </li>
  //           <li className="option" onClick={closeMobileMenu}>
  //             <Link to="/experience">EXPERIENCE</Link>
  //           </li>
  //           <li className="option" onClick={closeMobileMenu}>
  //             <Link to="/projects">PROJECTS</Link>
  //           </li>
  //           <li className="option" onClick={closeMobileMenu}>
  //             <Link to="/contact">CONTACT</Link>
  //           </li>
  //         </ul>
  //       </div>
  //       <div className="mobile-menu" onClick={handleClick}>
  //         {click ? (
  //           <CloseMenu className="menu-icon" />
  //         ) : (
  //           <MenuIcon className="menu-icon" />
  //         )}
  //       </div>
  //     </div>
  //   </nav>
  // );
}
