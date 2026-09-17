import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './Components/TopBar';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import ReadyToGetStarted from './Components/ReadyToGetStarted';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs'; // This is already here
import CustomServices from './Components/CustomServices';
import DataProtection from './Components/DataProtection';
import BookService from './Components/BookService';
import './App.css';

// This component will represent the homepage, containing all the sections.
const HomePage = () => (
  <>
    <Hero />
    <Services showExploreMoreButton={true} isHomePage={true} />
    <ReadyToGetStarted />
    <AboutUs />
    <ContactUs />
  </>
);

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services isHomePage={false} />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/book-service" element={<BookService />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;