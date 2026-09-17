import React, { useState } from 'react';
import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faTimes,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="top-bar">
      <div className="top-bar-container">
        {/* Desktop: Social Icons on the left */}
        <div className="top-bar-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>

        {/* Desktop: Contact Info on the right */}
        <div className="top-bar-contact">
          <a href="mailto:bngraphics254@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>bngraphics254@gmail.com</span>
          </a>
          <a
            href="https://wa.me/254705897624?text=%F0%9F%91%8B%20Welcome%20to%20BN%20Tech%20Solution!%20We%E2%80%99re%20excited%20to%20connect%20with%20you.%20%F0%9F%92%BB%E2%9C%A8%20How%20can%20we%20help%20you%20today%3F%20Feel%20free%20to%20tell%20us%20what%20you%E2%80%99re%20looking%20for%2C%20and%20our%20team%20will%20be%20happy%20to%20assist%20you.%20%F0%9F%9A%80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>0705897624</span>
          </a>
        </div>

        {/* Mobile: 3-dot menu icon */}
        <div className="top-bar-mobile-menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faEllipsisV} />
        </div>
      </div>

      {/* Mobile: Dropdown Menu */}
      <div className={`top-bar-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="mailto:bngraphics254@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> bngraphics254@gmail.com
        </a>
        <a
          href="https://wa.me/254705897624?text=%F0%9F%91%8B%20Welcome%20to%20BN%20Tech%20Solution!%20We%E2%80%99re%20excited%20to%20connect%20with%20you.%20%F0%9F%92%BB%E2%9C%A8%20How%20can%20we%20help%20you%20today%3F%20Feel%20free%20to%20tell%20us%20what%20you%E2%80%99re%20looking%20for%2C%20and%20our%20team%20will%20be%20happy%20to%20assist%20you.%20%F0%9F%9A%80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} /> 0705897624
        </a>
        <div className="top-bar-mobile-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;