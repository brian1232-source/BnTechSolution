import React, { useState } from 'react';
import './ContactUs.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const sanitizeInput = (value) => {
  return value
    .trim()
    .replace(/<[^>]*>/g, '')
    .slice(0, 500);
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [honeypot, setHoneypot] = useState('');

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      newErrors.name = 'Name must be between 2 and 100 characters.';
    }
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: sanitizeInput(value) }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (honeypot) {
      return;
    }

    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      setErrors({ submit: 'Please wait a few seconds before submitting again.' });
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});
    setLastSubmitTime(now);

    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section className="contact-us-section">
      <div className="contact-us-container">
        <div className="contact-us-header">
          <h2 className="contact-us-title">Get in Touch</h2>
          <p className="contact-us-subtitle">
            We'd love to hear from you! Whether you have a question about our
            services, pricing, or anything else, our team is ready to answer
            all your questions.
          </p>
        </div>
        <div className="contact-us-content">
          <div className="contact-card contact-info">
            <h3>Contact Information</h3>
            <p>
              Have a question or a project in mind? We'd love to hear from you.
              Use the form, and we'll be in touch shortly.
            </p>
            <ul className="contact-details">
              <li>
                <FaPhoneAlt />
                <a href="tel:+254705897624">+254 705 897624</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:bngraphics254@gmail.com">
                  bngraphics254@gmail.com
                </a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Kitui, Kenya</span>
              </li>
            </ul>
          </div>
          <form
            className="contact-card contact-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="_gotcha"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            <input type="hidden" name="_captcha" value="false" />
            {errors.submit && <div className="form-error-message">{errors.submit}</div>}
            {submitStatus === 'success' && (
              <div className="form-success-message">
                Your message has been sent successfully! We'll get back to you soon.
              </div>
            )}
            {!submitStatus && (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    maxLength={254}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>
                <button
                  type="submit"
                  className="contact-form-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
