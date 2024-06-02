import React, { useState } from "react";
import { Link } from "react-router-dom";
import Classes from "../Styles/NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={Classes.Navbar}>
      <div className={Classes.brand}>
        <h1 className={Classes.NavLogo}>
          Abdullah <span>Travels</span>
        </h1>
        <div className={Classes.hamburger}>
          {toggle ? (
            <FontAwesomeIcon
              icon={faClose}
              className={Classes.menuIcon}
              onClick={() => setToggle(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className={Classes.menuIcon}
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </div>

      <ul className={`${Classes.navLinks} ${toggle ? Classes.open : ""}`}>
        <li>
          <Link to="/" className={Classes.active}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/recommendation">Places</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <button className={Classes.NavBtn}>Connect</button>
    </nav>
  );
}

export default NavBar;
