import React from "react";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h3 className="sitename">NEXTGEN STUDIO</h3>
            <p>
              NextGen is a full-service branding and creative studio
              specializing in brand development, graphic design, web development
              and marketing strategy.
            </p>

            {/* Social Links */}
            <div className="social-links d-flex justify-content-center">
              <Link to="">
                <i className="bi bi-twitter-x"></i>
              </Link>
              <Link to="">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="">
                <i className="bi bi-instagram"></i>
              </Link>
              {/* <Link to="">
                <i className="bi bi-skype"></i>
              </Link> */}
              <Link to="">
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            {/* Quick Links Section */}
            <div className="quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      handleNavigate("/");
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => {
                      handleNavigate("/about");
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    onClick={() => {
                      handleNavigate("/portfolio");
                    }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => {
                      handleNavigate("/contact");
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/PrivacyPolicy"
                    onClick={() => {
                      handleNavigate("/PrivacyPolicy");
                    }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/TermsandConditions"
                    onClick={() => {
                      handleNavigate("/TermsandConditions");
                    }}
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4>Contact Us</h4>
            <p>
              1309 Coffeen Ave,
              <br />
              1200, Sheridan,
              <br />
               WY 8280 <br />
              <br />
              <strong>Phone:</strong> (307) 263 0994
              <br />
              <strong>Email:</strong> info@nextgenstudio.co
              <br />
            </p>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="container">
          <div className="copyright">
            <span>© Copyright 2025 by</span>{" "}
            <strong className="px-1 sitename">NEXTGEN STUDIO.</strong>{" "}
            <span>All Rights Reserved.</span>
          </div>
          <div className="credits">
            {/* Licensing information */}
            {/* Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
