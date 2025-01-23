import React from "react";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";
const Services = () => {
  const services = [
    {
      id: 1,
      icon: "bi bi-robot",
      title: "Research, data & user needs analysis",
      para: "Like our brands, every website is built with an audience-first approach that focuses on the customer journey, needs, and desired actions for every page.",
      descriptions: [
        "Audience analysis & use mapping",
        "Stakeholder workshops",
        "Data collection & analysis",
        "User/sales flow mapping",
        "Content planning",
      ],
      delay: 100,
    },
    {
      id: 2,
      icon: "bi bi-rulers",
      title: "UX & UI design",
      para: "We help bridge the gap between your physical and digital brand, ensuring the online customer experience is just as amazing as it would be in person.",
      descriptions: [
        "Customer-centric design",
        "Fully clickable prototypes",
        "Creative content development",
        "Custom illustration",
        "Responsive website planning",
      ],
      delay: 200,
    },
    {
      id: 3,
      icon: "bi bi-laptop",
      title: "Website development",
      para: "NextGen Studio specializes in open-source coding frameworks and systems that put control of your most valuable brand asset back in your hands.",
      descriptions: [
        "Full-stack web development",
        "WordPress development",
        "Search engine optimization",
        "On-page optimization",
        "WooCommerce websites",
      ],
      delay: 300,
    },
    {
      id: 4,
      icon: "bi bi-eye",
      title: "Website accessibility & compliance",
      para: "Every site we develop is rigorously tested for compatibility, accessibility, and functionality across all available browsers and systems.",
      descriptions: [
        "Accessibility audits",
        "Browser stack testing",
        "Technical updates",
        "WCAG 2.0 Access Measurements",
      ],
      delay: 400,
    },
    {
      id: 5,
      icon: "bi bi-shield-shaded",
      title: "Hosting, security & support",
      para: "Our technical teams are here to ensure your website is up and running securely around the clock.",
      descriptions: [
        "WordPress hosting",
        "Website backups & maintenance",
        "Security audits & updates",
        "Web protection, SSL, Cloudflare, CDN, DDOS",
      ],
      delay: 500,
    },
  ];

  return (
    <>
      {/* <section
        id="hero"
        className="hero section dark-background"
        style={{ minHeight: "85vh" }}
      >
        <img src="assets/img/LandingPages/website.webp" alt="" data-aos="fade-in" />
        <div className="row" style={{ width: "70%" }}>
          <div className="col-lg-8 mt-5">
            <div className="container d-flex flex-column align-items-left text-left">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Website Design & Development
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                We don't just create websites, we build lasting connections
                through audience-first digital experiences
              </p> */}

      {/* Button Container */}
      {/* <div
                className="button-group"
                data-aos="fade-in"
                data-aos-delay="200"
              >
                <Link to="/contact" className="read-more contact-button" onClick={() => {
                      handleNavigate("/contact");
                    }}>
                  <span>Contact Us</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </section> */}
      <PageTitle
        title="Website Design & Development"
        backgroundImage="assets/img/LandingPages/website.webp"
        subtitle="Website Design & Development"
        para="We don't just create websites, we build lasting connections through audience-first digital experiences"
        id="pad1"
      />
      <section id="services" className="services section">
        {/* Section Title */}
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ width: "80%" }}
        >
          <h2>Digital & Website Design</h2>
          <p>
            We’re a marketing agency that can’t help but get our hands dirty.
            That means we approach every website through the lens of how it will
            create engaging digital experiences and drive your marketing goals.
            Your website should be, after all, your hardest working and most
            successful sales representative.
          </p>
        </div>

        <div className="container" style={{ width: "80%" }}>
          <div className="row gy-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <Link to="#" className="stretched-link">
                    <h3>{service.title}</h3>
                  </Link>
                  <p>{service.para}</p>
                  {/* Render multiple descriptions */}
                  <div className="description-list">
                    <h3>{service.title}</h3>
                    <ul>
                      {service.descriptions.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Services;
