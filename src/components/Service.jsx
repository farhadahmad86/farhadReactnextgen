import React from "react";

import { Link } from "react-router-dom"; 
const Services = () => {
  const services = [
    {
      id: 1,
      icon: "bi bi-activity",
      title: "Branding & Design",
      descriptions: [
        "Visual Identity",
        "Brand Guidelines",
        "Logo",
        "Brochure",
        "Brand Assets",
        "Ebook",
      ],
      delay: 100,
    },
    {
      id: 2,
      icon: "bi bi-broadcast",
      title: "Web Design & Development",
      descriptions: [
        "UX & UI design",
        "Website development",
        "eCommerce Store",
        "Web Apps",
        "Digital Products",
        "Hosting and maintenance ",
      ],
      delay: 200,
    },
    {
      id: 3,
      icon: "bi bi-easel",
      title: "Marketing & Content",
      descriptions: [
        "Social Media",
        "Digital Advertising",
        "Performance Marketing",
        "SEO",
        "Content Marketing",
        "Animation",
        "Ebook",
      ],
      delay: 300,
    },
    {
      id: 4,
      icon: "bi bi-bounding-box-circles",
      title: "Artificial Intelligence ",
      descriptions: ["Coming Soon"],
      delay: 400,
    },
  ];

  return (
    <section id="services" className="services section">
        {/* Section Title */}
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ width: "80%" }}
        >
          <h2>Our Services</h2>
          <p>
            We’re full-service, which means that we’ve got you covered from
            competitive research and brand strategy through to website
            development, marketing asset creation, and ongoing promotion of your
            company!
          </p>
        </div>

        <div className="container" style={{ width: "80%" }}>
          <div className="row gy-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>{service.title}</h3>
                  </a>
                  {/* Render multiple descriptions */}
                  {service.descriptions.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            className="button-group mt-4"
            data-aos="fade-in"
            data-aos-delay="200"
            style={{ justifyContent: "center" }}
          >
            <a
              href="#"
              className="read-more about-button"
              style={{
                background: "var(--accent-color)",
                color: "var(--contrast-color)",
                fontFamily: "var(--heading-font)",
                fontWeight: "500",
                fontSize: "16px",
                letterSpacing: "1px",
                padding: "10px 28px",
                borderRadius: "50px",
                transition: "0.3s",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px", // Spacing between buttons
              }}
            >
              <span>View All Services</span>
            </a>
          </div>
        </div>
      </section>
  );
};

export default Services;
