import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { Link } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav>
        <Link to="/" className="title">
          Website
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
