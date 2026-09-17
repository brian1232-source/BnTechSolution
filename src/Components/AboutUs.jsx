import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import aboutImg from '../assets/about.png'; // Reusing the hero image

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-grid">
          <div className="about-us-image">
            <img src={aboutImg} alt="About Bn Tech Solution" />
          </div>
          <div className="about-us-content">
            <h2 className="about-us-title">About Bn Tech Solution</h2>
            <p className="about-us-description">
              From website development and graphic design to software solutions,
              branding, and IT services, we are committed to delivering quality
              work and dependable support. Whatever your project may be, BN Tech
              Solution is ready to help you create, improve, and bring your ideas
              to life.
            </p>
            <Link to="/book-service" className="about-us-button">Let's Work Together</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;