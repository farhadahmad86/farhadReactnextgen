import React from "react";
import "../pages/css/tw.css"; // Import CSS for styling
import { Link } from "react-router-dom"; 

const OfferBanner = () => {
  return (
    <section className="offer-banner" data-aos="fade-up">
      <div className="container" style={{ width: "80%" }}>
        <div className="offer-content">
          <div className="offer-text">
            <p>
              Get up to 50% off on all our services. Limited time offer, so don’t miss out on the chance to grow
              your business with our affordable pricing packages!
            </p>
            <div className="offer-lists">
              {/* Left-aligned list */}
              <ul className="offer-list-left">
                <li>
                  <i className="bi bi-check-circle-fill text-success"></i> Quality services tailored to your needs
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success"></i> Affordable pricing packages
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success"></i> Expert team support
                </li>
              </ul>

              {/* Right-aligned list */}
              <ul className="offer-list-right">
                <li>
                  <i className="bi bi-check-circle-fill text-success"></i> Timely delivery
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success"></i> Customizable packages
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success"></i> 24/7 customer support
                </li>
              </ul>
            </div>
            <div className="button-group">
              <Link className="btn btn-primary offer-btn" to="/packages" onClick={() => {
                      handleNavigate("/packages");
                    }}
                    >Learn More</Link>
              <Link className="btn btn-outline-secondary offer-btn" to="/contact" onClick={() => {
                      handleNavigate("/contact");
                    }}
                    >Get Started</Link>
            </div>
          </div>
          <div className="offer-image">
            <img src="assets/img/offerbannaer.webp" alt="Special Offer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
