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
      icon: "bi bi-megaphone",
      title: "Marketing campaigns",
      para: "Good marketing is like sanctioned vandalism: noticeable, engaging, and thought-provoking. Otherwise, it's irrelevant.",
      descriptions: [
        "Marketing strategy",
        "Campaign planning",
        "Buyer behaviors",
        "Qualitative & quantitative research",
        "Analytics & evaluation",
      ],
      delay: 100,
    },
    {
      id: 2,
      icon: "bi bi-pencil-square",
      title: "Content marketing",
      para: "We create compelling brand stories with our dedicated team of writers, editors, and marketers.",
      descriptions: [
        "Web writing & editing",
        "Content strategy",
        "Brand storytelling",
        "Blog post writing",
        "Whitepapers",
        "Press releases",
      ],
      delay: 200,
    },
    {
      id: 3,
      icon: "bi bi-bar-chart",
      title: "Digital marketing",
      para: "Maximize your marketing ROI with our strategic approach to digital advertising and performance tracking.",
      descriptions: [
        "Market research & strategy",
        "Pay-Per-Click advertising",
        "Remarketing campaigns",
        "Video advertising",
        "Social media advertising",
      ],
      delay: 300,
    },
    {
      id: 4,
      icon: "bi bi-people",
      title: "Social Media & influencer Marketing",
      para: "Elevate your brand's voice with a strategic presence across social media platforms.",
      descriptions: [
        "Social media strategy",
        "Content planning & implementation",
        "Community management",
        "Influencer marketing",
        "Engagement tracking & analytics",
      ],
      delay: 400,
    },
    {
      id: 5,
      icon: "bi bi-camera-video",
      title: "Video & Media Production",
      para: "Capture your audience’s attention with stunning video and media content tailored to your brand.",
      descriptions: [
        "Video strategy",
        "Scriptwriting & storyboarding",
        "Production & editing",
        "Animation & motion graphics",
        "Branded content",
        "Corporate videos",
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
        <img src="assets/img/LandingPages/digittal-marketing.webp" alt="" data-aos="fade-in" />
        <div className="row" style={{ width: "70%" }}>
          <div className="col-lg-8 mt-5">
            <div className="container d-flex flex-column align-items-left text-left">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Digital Marketing Services
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Creative marketing and content strategies that people can't help
                notice.
              </p>

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
        id="pad4"
        title="Unmatched Advertising Solutions"
        backgroundImage="assets/img/LandingPages/digittal-marketing.webp"
        subtitle="Digital Marketing"
        para="At NextGen Studio, we're dedicated to boosting your brand's performance and success."
      />
      <section id="services" className="services section">
        {/* Section Title */}
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ width: "80%" }}
        >
          <h2>Advertising & Content Services</h2>
          <p>
            Every brand has a story to tell. We’re here to make sure that story
            spreads as far and wide as possible. By focusing on using the right
            tool for the right audience, NextGen Studio has produced dozens of
            award-winning advertising and marketing campaigns for brands across
            North America. Go ahead, give us your wildest idea and we’ll make it
            a reality.
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
                  <Link to="/contact" className="stretched-link">
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
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Services;
