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
      icon: "bi bi-award",
      title: "Logo Design",
      para: "A logo must inspire and create an emotional connection with your brand. NextGen Studio delivers logos that build a reliable image and customer loyalty.",
      descriptions: [
        "Fast turnaround",
        "Multiple file types",
        "100% ownership",
        "Original designs",
        "Permanent file storage",
      ],
      delay: 100,
    },
    {
      id: 2,
      icon: "bi bi-book",
      title: "Brochure Design",
      para: "Craft brochures that captivate buyers with luxury designs and clear messaging to convey your brand effectively.",
      descriptions: [
        "Custom brochure designs",
        "Final master files",
        "24/7 design consultancy",
        "100% ownership",
        "100% money-back guarantee",
      ],
      delay: 200,
    },
    {
      id: 3,
      icon: "bi bi-envelope",
      title: "Email Newsletter Template",
      para: "Leverage the power of email marketing with custom-designed newsletter templates that make your brand stand out.",
      descriptions: [
        "Custom designs",
        "Final master files",
        "24/7 design consultancy",
        "100% ownership",
        "100% money-back guarantee",
      ],
      delay: 300,
    },
    {
      id: 4,
      icon: "bi bi-card-text",
      title: "Business Card Design",
      para: "Professional business cards that leave a lasting impression, showcasing your brand identity effectively.",
      descriptions: [
        "Custom designs",
        "Final master files",
        "24/7 design consultancy",
        "100% ownership",
        "100% money-back guarantee",
      ],
      delay: 400,
    },
    {
      id: 5,
      icon: "bi bi-pencil-square",
      title: "Custom Branding",
      para: "Attach your digital branding with substantial marketing assets for a consistent brand identity.",
      descriptions: [
        "Custom designs",
        "Final master files",
        "24/7 design consultancy",
        "100% ownership",
        "100% money-back guarantee",
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
        <img src="assets/img/LandingPages/branding-page.webp" alt="" data-aos="fade-in" />
        <div className="row" style={{ width: "70%" }}>
          <div className="col-lg-8 mt-5">
            <div className="container d-flex flex-column align-items-left text-left">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Branding & Design
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Creative marketing and content strategies that people can't help
                notice.
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
        title="Great Brands Add Value!"
        backgroundImage="assets/img/LandingPages/branding-page.webp"
        subtitle="Branding & Design"
        para="We build audience-focused brand experiences that get noticed"
        id="pad1"
      />
      <section id="services" className="services section">
        {/* Section Title */}
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ width: "80%" }}
        >
          <h2>Branding Services</h2>
          <p>
            Your brand is the most valuable asset your company owns. It’s what
            sets you apart, attracts customers, and builds trust. With our
            expert branding techniques, we’ll create a strong brand identity
            that resonates with your audience and drives business growth.
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
