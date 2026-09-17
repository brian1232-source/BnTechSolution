import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming Navbar.css is in the same folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faTimes
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BN <span className="logo-highlight">Tech</span> Solutions
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>

        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/data-protection" className="nav-links" onClick={toggleMenu}>
              Data Protection
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item nav-item-button">
            <Link to="/book-service" className="nav-links-button" onClick={toggleMenu}>
              Book Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;