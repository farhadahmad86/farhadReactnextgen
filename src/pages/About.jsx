import React from "react";
import PageTitle from "./PageTitle";
// import Contact from "./contact";
import Footer from "./Footer";
import Portfolio from "../components/Portfolio";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";

import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <PageTitle
        id="pad3"
        title="Creative Workforce Behind Successful Journey!"
        backgroundImage="assets/img/LandingPages/about.webp"
        subtitle="About Us"
        para="We deliver innovative solutions, combining creativity and expertise to help you succeed."
      />
      <section id="about" className="about section container">
        {/* Section Title */}
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ width: "80%" }}
        >
          {/* <h2 style={{ textAlign: "center" }}>About</h2> */}
          {/* <p>Tailored solutions, proven results, and exceptional service.</p> */}
        </div>

        <div className="container" style={{ width: "80%" }}>
          <div className="row gy-4">
            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                We understand the challenges businesses face when trying to
                achieve their marketing goals with limited time, resources, and
                budgets. The constant pressure to stand out in a competitive
                market while managing multiple tasks can feel overwhelming.
                That's why we created a proven, three-step approach designed to
                streamline and elevate your marketing efforts. By strategically
                coordinating your branding, website, and marketing campaigns, we
                ensure that every aspect of your business communication works in
                harmony. This holistic approach not only saves time and
                resources but also maximizes your return on investment,
                delivering results that are, on average, four times more
                effective across all channels. With our guidance, you'll
                transform your marketing strategy into a powerful,
                results-driven system that helps your business grow and thrive.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>Comprehensive Marketing Solutions</span>
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>Proven Results</span>
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>Customer-Centric Approach</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="read-more"
                onClick={() => {
                  handleNavigate("/contact");
                }}
              >
                <span>Get in Touch</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="assets/img/about-1.webp"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default About;
