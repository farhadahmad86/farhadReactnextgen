import React, { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import TW from "./TW";
import Footer from "./Footer";
import TrustedCompanies from "./TrustedCompanies";
import OfferBanner from "../components/OfferBanner";
import AOS from "aos";
import "aos/dist/aos.css";
import Reviews from "../components/Reviews";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Service from "../components/Service";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
const Home = () => {
  const [activeTab, setActiveTab] = useState("tab-logo"); // Default active tab

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img
          src="assets/img/LandingPages/landing-page.webp"
          alt=""
          data-aos="fade-in"
          className="img-1"
        />
        <video className="img-2" autoPlay muted loop playsInline>
          <source
            src="assets/img/LandingPages/nextgenvis2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="row header">
          <div className="col-lg-8">
            <div className="container d-flex flex-column align-items-left text-left">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Your all-in-one marketing partner
              </h2>
              <p data-aos="fade-up" data-aos-delay="200" className="p1">
                We are data-driven digital marketing agency who knows how to
                elevate your online business ranking and create beautiful
                visuals that works best.
              </p>

              {/* Button Container */}
              <div
                className="button-group"
                data-aos="fade-in"
                data-aos-delay="200"
              >
                <Link
                  onClick={() => {
                    handleNavigate("/about");
                  }}
                  to="/about"
                  className="read-more contact-button"
                  // style={{
                  //   background: "var(--accent-color)",
                  //   color: "var(--contrast-color)",
                  //   fontFamily: "var(--heading-font)",
                  //   fontWeight: "500",
                  //   fontSize: "16px",
                  //   letterSpacing: "1px",
                  //   padding: "10px 28px",
                  //   borderRadius: "50px",
                  //   transition: "0.3s",
                  //   display: "inline-flex",
                  //   alignItems: "center",
                  //   justifyContent: "center",
                  //   marginRight: "10px", // Spacing between buttons
                  // }}
                >
                  <span>About Company</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link
                  onClick={() => {
                    handleNavigate("/contact");
                  }}
                  to="/contact"
                  className="read-more contact-button"
                >
                  <span>BOOK A CALL</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </section>
      {/* Trusted by Top Companies Section */}
      {/* <OfferBanner /> */}
      {/* <TrustedCompanies /> */}
      {/* About Section */}
      <About />
      {/* Counter Se */}
      {/* <Counter /> */}
      {/* Services */}
      <Service />
      {/* Portfolio  */}
      <Portfolio />
      {/* Technologies we work with */}
      <TW />
      {/* Pricing */}
      <Pricing />
      {/* <Pricing /> */}
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
