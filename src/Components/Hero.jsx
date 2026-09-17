import React from 'react';
import './Hero.css';
import heroImg from '../assets/bn.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-badge">Trusted by customers</div>
            <h1>Welcome to Bn Tech Solution</h1>
            <p className="hero-tagline">
              Built to connect, designed to perform
            </p>
            <p className="hero-subtext">
              <span className="subtext-item">We deliver:</span>
              <span className="subtext-item">Web Design</span>
              <span className="subtext-item">Networking</span>
              <span className="subtext-item">Graphic Design</span>
              <span className="subtext-item">IT Support</span>
              <span className="subtext-item">Cyber Services</span>
            </p>
            <div className="hero-actions">
              <a href="#services" className="hero-button">
                Learn More
              </a>
              <a href="#contact" className="hero-secondary">
                Tell me more
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-card">
              <img src={heroImg} alt="BN Tech Solution visual" />
            </div>
          </div>
        </div>

        <div className="hero-info-box">
          <h2>Why Choose Us?</h2>
          <div className="hero-info-grid">
            <div className="info-card">
              <p>✓ Affordable</p>
              <small>Quality solutions within your budget</small>
            </div>
            <div className="info-card">
              <p>✓ Expert Team</p>
              <small>Skilled & passionate professionals</small>
            </div>
            <div className="info-card">
              <p>✓ Community First</p>
              <small>Built around your needs</small>
            </div>
            <div className="info-card">
              <p>✓ Fast & Reliable</p>
              <small>On-time delivery, always</small>
            </div>
            <div className="info-card">
              <p>✓ All-in-One</p>
              <small>Every tech need under one roof</small>
            </div>
            <div className="info-card">
              <p>✓ 24/7 Support</p>
              <small>Always here when you need us</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
