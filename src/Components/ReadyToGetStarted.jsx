import React from 'react';
import './ReadyToGetStarted.css';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ReadyToGetStarted = () => {
  return (
    <section className="ready-to-start-section">
      <div className="ready-to-start-container">
        <h2 className="ready-to-start-title">Ready to Get Started?</h2>
        <p className="ready-to-start-tagline">
          Your vision. Our expertise. Let’s build something amazing together.
        </p>
        <div className="ready-to-start-actions">
          <a href="tel:+254705897624" className="ready-to-start-button phone">
            <FaPhoneAlt /> Call: 0705897624
          </a>
          <a href="https://wa.me/254705897624?text=%F0%9F%91%8B%20Welcome%20to%20BN%20Tech%20Solution!%20We%E2%80%99re%20excited%20to%20connect%20with%20you.%20%F0%9F%92%BB%E2%9C%A8%20How%20can%20we%20help%20you%20today%3F%20Feel%20free%20to%20tell%20us%20what%20you%E2%80%99re%20looking%20for%2C%20and%20our%20team%20will%20be%20happy%20to%20assist%20you.%20%F0%9F%9A%80" target="_blank" rel="noopener noreferrer" className="ready-to-start-button whatsapp">
            <FaWhatsapp /> WhatsApp: 0705897624
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;