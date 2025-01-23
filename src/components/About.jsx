import React from "react";
import { Link } from "react-router-dom"; 

const About = () => {
  return (
    <>
      <section id="about" className="about section container" style={{ 
            backgroundColor: "#860707",
            color: "white",
            fontSize: "20px"
           }}>
        {/* Section Title */}
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ width: "80%",
           }}
        >
          <h2 style={{ color: "white"}}>About</h2>
          <p style={{ color: "white"}}>Tailored solutions, proven results, and exceptional service.</p>
        </div>

        <div className="container" style={{ width: "80%" }}>
          <div className="row gy-4">
            <div
              className="col-lg-12 content"
              data-aos="fade-up"
              data-aos-delay="100"
              // style={{ marginTop: "150px" }}
            >
              <p>
                We understand what it is like to struggle to meet marketing
                goals with limited time and budgets. That’s why we developed a
                proven three-step approach that coordinates your branding,
                website and marketing, resulting in an average of 4X better
                results across all channels.
              </p>
              <Link to="/about" className="read-more" onClick={() => {
                      handleNavigate("/about");
                    }}>
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            {/* <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="assets/img/about-2.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
