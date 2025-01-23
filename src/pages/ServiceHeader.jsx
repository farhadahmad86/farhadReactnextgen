import React from "react";

const PageTitle = ({ title = "Page Title", subtitle = "Page Subtitle", paragraph = "Page description goes here." }) => {
  return (
    <section id="hero" className="hero section dark-background">
        <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
        <div className="row" style={{ width: "70%" }}>
          <div className="col-lg-8">
            <div className="container d-flex flex-column align-items-left text-left">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Your all-in-one marketing partner
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Struggling to reach your marketing goals? Meet your challenges
                head-on with a dedicated team that helps brands win more
                business through award-winning branding, website design,
                marketing strategy, and C-suite support.
              </p>

              {/* Button Container */}
              <div
                className="button-group"
                data-aos="fade-in"
                data-aos-delay="200"
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
                  <span>About Company</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
                <a href="#" className="read-more contact-button">
                  <span>BOOK A CALL</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </section>
  );
};

export default PageTitle;
