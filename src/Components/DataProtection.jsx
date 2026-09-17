import React from 'react';
import './DataProtection.css';

const DataProtection = () => {
  return (
    <section className="data-protection-section">
      <div className="data-protection-container">
        <div className="data-protection-header">
          <h2 className="data-protection-title">Data Protection & Privacy Policy</h2>
          <p className="data-protection-subtitle">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
          </p>
        </div>
        <div className="data-protection-content">
          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal information such as your name, email address, and phone number when you use our contact or booking forms. We also collect non-personal data through cookies to improve your browsing experience.
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
            The information you provide is used to respond to your inquiries, process your service bookings, and improve our services. We will not share your personal information with third parties without your consent, except as required by law.
          </p>

          <h3>3. Data Security</h3>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. Your data is stored in a secure environment and is only accessible by a limited number of persons who have special access rights to such systems.
          </p>

          <h3>4. Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal information at any time. Please contact us if you wish to exercise these rights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataProtection;