import React from 'react';
import './CustomServices.css'; // We'll create this CSS file next
import { Link } from 'react-router-dom';

const CustomServices = () => {
  return (
    <section className="custom-services-section">
      <div className="custom-services-container">
        <div className="custom-services-header">
          <h2 className="custom-services-title">Custom Solutions Tailored for You</h2>
          <p className="custom-services-subtitle">
            At BN Tech Solution, we understand that every business has unique needs. If our standard services don't quite fit your vision, we're here to craft a bespoke solution just for you.
          </p>
        </div>
        <div className="custom-services-content">
          <p>
            Whether you require a highly specialized software application, a complex network infrastructure, or a unique digital strategy, our expert team is ready to collaborate with you. We pride ourselves on our flexibility and ability to deliver innovative, custom-built solutions that drive real results for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomServices;