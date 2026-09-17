import React from 'react';
import './Services.css';
import { FaCode, FaMobileAlt, FaPalette, FaShieldAlt, FaBullhorn, FaLaptopCode, FaMusic, FaLock, FaKey } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const servicesData = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Launch your digital presence with a stunning, high-performance website. We build modern, responsive sites designed to engage your audience and grow your business.',
    color: '#a855f7', // Purple
    categories: [
      'Business Websites',
      'Portfolio Websites',
      'E-commerce Websites',
      'School Websites',
      'Hotel/Restaurant Websites',
      'Responsive Mobile Websites',
      'Website Design',
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Connect with your customers on the go. We create simple and intuitive mobile apps for the Android platform, designed for seamless user experiences.',
    color: '#3b82f6', // Blue,
    categories: [
      'Android Applications',
      'School Management Apps',
      'Business Applications',
      'Educational Apps',
      'Custom Mobile Apps',
    ],
  },
  {
    icon: <FaPalette />,
    title: 'Graphic Design',
    description: 'Make a lasting impression with stunning visuals. From eye-catching posters to professional flyers, we transform your ideas into designs that captivate and elevate your brand.',
    color: '#ec4899', // Pink,
    categories: [
      'Posters & Flyers',
      'Business Cards',
      'Social Media Designs',
      'Wedding/Event Posters',
      'Banners',
      'Brochures',
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: 'Online Services',
    description: 'We bridge the digital divide by providing essential online services. From processing online applications to handling digital payments, we make navigating the online world simple and accessible.',
    color: '#14b8a6', // Teal,
    categories: [
      'HELB Applications',
      'KUCCPS Applications',
      'University Applications',
      'Government Services (eCitizen)',
      'KRA Returns & Services',
      'Online Payments (M-Pesa)',
      'Document Typing & Formatting',
      'Scanning & Printing',
    ],
  },
  {
    icon: <FaBullhorn />,
    title: 'Digital Marketing',
    description: 'Amplify your reach and grow your online presence. Our data-driven digital marketing strategies are designed to connect you with your target audience and drive results.',
    color: '#4f46e5', // Indigo
    categories: [
      'Social Media Marketing',
      'Content Creation',
      'Email Marketing',
      'Analytics & Reporting',
    ],
  },
  {
    icon: <FaLaptopCode />,
    title: 'Computer Services',
    description: 'Keep your systems running smoothly with our expert IT support. We handle OS installation, simple computer maintenance, and troubleshooting to minimize downtime and maximize productivity.',
    color: '#6b7280', // Gray,
    categories: [
      'Windows Installation',
      'Linux Installation',
      'Software Installation',
      'Computer Formatting',
      'System Troubleshooting',
      'Computer Maintenance',
      'Virus/Malware Removal',
    ],
  },
  {
    icon: <FaMusic />,
    title: 'DJ Services',
    description: 'Elevate your events with professional DJ services. From weddings to birthdays, we provide high-quality sound and lighting to make every occasion unforgettable.',
    color: '#f59e0b', // Amber
    categories: [
      'Wedding',
      'Pre-wedding',
      'Birthday Party',
      'Traditional Wedding',
      'Events hosted at home',
      'Events hosted at school',
      'Other occasions',
    ],
  },
];

const Services = ({ showExploreMoreButton = false, isHomePage = false }) => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Products & Services</h2>
          <p className="services-subtitle">
            We offer a wide range of solutions to help your business succeed in the digital world.
          </p>
        </div>

        {isHomePage ? (
          // Card layout for the homepage
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-card-icon">
                  {service.icon}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                {showExploreMoreButton && (
                  <Link to="/services" className="service-card-button">Explore More</Link>
                )}
              </div>
            ))}
          </div>
        ) : (
          // List layout for the dedicated services page
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div className="service-card service-page-card" key={index} style={{ '--service-color': service.color }}>
                <div className="service-card-icon">
                  {service.icon}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                  {service.categories && (
                    <ul className="service-card-categories">
                      {service.categories.map((category, i) => (
                        <li key={i}>{category}</li>
                      ))}
                    </ul>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;