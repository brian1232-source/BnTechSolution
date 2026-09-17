import React, { useState } from 'react';
import './BookService.css';
import { servicesData } from './Services';

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

const isValidPhone = (phone) => {
  const phoneRegex = /^[+]?[\d\s\-\(\)]{7,20}$/;
  return phoneRegex.test(phone);
};

const BookService = () => {
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbwSlQ8Hp9SVg_MnSQBfgCbwIjVDGVi3jSx4MYWsZMc0M55Uxf2wAcNZslmhgPVHzTG81g/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
  });
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
    if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }
    if (formData.location.trim().length < 2 || formData.location.trim().length > 100) {
      newErrors.location = 'Location must be between 2 and 100 characters.';
    }
    if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be 1000 characters or fewer.';
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

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    try {
      const formPayload = new FormData();
      formPayload.append('formType', 'booking');
      formPayload.append('name', formData.name.trim());
      formPayload.append('email', formData.email.trim());
      formPayload.append('phone', formData.phone.trim());
      formPayload.append('service', formData.service);
      formPayload.append('location', formData.location.trim());
      formPayload.append('message', formData.message.trim());

      await fetch(scriptUrl, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors',
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        message: '',
      });
    } catch (err) {
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="book-service-section">
      <div className="book-service-container">
        <div className="book-service-header">
          <h2 className="book-service-title">Book Your Service</h2>
          <p className="book-service-subtitle">
            Ready to get started? Fill out the form below to book a service with us. We'll get back to you shortly to confirm the details.
          </p>
        </div>
        <form
          className="book-service-form"
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
              Your booking has been submitted successfully! We'll contact you to confirm the details.
            </div>
          )}
          {!submitStatus && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    maxLength={100}
                    placeholder="BN Tech Solution"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    maxLength={254}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    maxLength={20}
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="service">Select a Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleSelectChange}
                    required
                  >
                    <option value="" disabled>-- Please choose a service --</option>
                    {servicesData.map((service) => (
                      <option key={service.title} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                  {errors.service && <span className="form-error">{errors.service}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="location">Place of Service (Your Location) *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  maxLength={100}
                  placeholder="e.g., Kitui, Kenya"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                {errors.location && <span className="form-error">{errors.location}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  maxLength={1000}
                  placeholder="Tell us more about your project requirements..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>
              <button
                type="submit"
                className="book-service-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking'}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default BookService;
