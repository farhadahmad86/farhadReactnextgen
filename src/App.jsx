import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import "./assets/css/main.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import Contact from "./pages/contact";
import DigitalMarketing from "./pages/DigitalMarketing";
import BrandingAndDesign from "./pages/BrandingAndDesign";
import WebsiteDesign from "./pages/WebsiteDesign";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsandConditions from "./pages/TermsandConditions";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Controls the duration of animations
      once: true, // Animation only happens once when scrolling down
    });
    // Initialize PureCounter if it's available globally
    if (window.PureCounter) {
      new window.PureCounter();
    }
  }, []);
  return (
    <Router>
      <Navbar />
      <main
        className="main"
        
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/packages" element={<Pricing />} />
          <Route path="/testimonials" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/branding-and-design" element={<BrandingAndDesign />} />
          <Route path="/website-design" element={<WebsiteDesign />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsandConditions" element={<TermsandConditions />} />
          {/* Other routes */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
