import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3 className="footer-logo">
              BN <span className="logo-highlight">Tech</span> Solutions
            </h3>
            <p>
              Your trusted partner for innovative tech solutions. We build to
              connect and design to perform.
            </p>
          </div>
          <div className="footer-links-container">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/data-protection">Data Protection</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-social-container">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social-icons">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com" aria-label="TikTok">
                <FaTiktok />
              </a>
              <a href="https://wa.me/254705897624" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bn Tech Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;