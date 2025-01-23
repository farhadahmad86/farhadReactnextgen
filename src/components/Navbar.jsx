import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle("mobile-nav-active");
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };
  const isActive = (path) => location.pathname === path;
  return (
    <header
      id="header"
      className="header d-flex align-items-center fixed-top"
      style={{ backgroundColor: "#101010" }}
    >
      <div className="container position-relative d-flex align-items-center justify-content-between NavBar-width">
        <Link
          to="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
          onClick={() => {
            toggleNav();
            handleNavigate("/");
          }}
        >
          <img src="assets/img/logo.webp" alt="Logo" />
        </Link>
        <nav id="navmenu" className={`navmenu ${isNavOpen ? "active" : ""}`}>
          <ul>
            <li
              className={isActive("/about") ? "active" : ""}
              onClick={() => {
                toggleNav();
                handleNavigate("/about");
              }}
            >
              <Link to="/about">About Us</Link>
            </li>
            <li className="dropdown">
              <Link
                to="#"
                onClick={toggleServicesDropdown}
                className={isServicesDropdownOpen ? "active" : ""}
              >
                Services
                <i
                  className={`bi bi-chevron-down ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                ></i>
              </Link>
              <ul className={isServicesDropdownOpen ? "dropdown-active" : ""}>
                <li
                  className={isActive("/digital-marketing") ? "active" : ""}
                  onClick={() => {
                    toggleNav();
                    handleNavigate("/digital-marketing");
                  }}
                >
                  <Link to="digital-marketing">Digital Marketing</Link>
                </li>
                <li
                  className={isActive("/branding-and-design") ? "active" : ""}
                  onClick={() => {
                    toggleNav();
                    handleNavigate("/branding-and-design");
                  }}
                >
                  <Link to="branding-and-design">Branding & Design</Link>
                </li>
                <li
                  className={isActive("/website-design") ? "active" : ""}
                  onClick={() => {
                    toggleNav();
                    handleNavigate("/website-design");
                  }}
                >
                  <Link to="website-design">Website Design & Development</Link>
                </li>
                {/* ... other service items ... */}
              </ul>
            </li>
            <li
              className={isActive("/portfolio") ? "active" : ""}
              onClick={() => {
                toggleNav();
                handleNavigate("/portfolio");
              }}
            >
              <Link to="portfolio">Portfolio</Link>
            </li>
            <li
              className={isActive("/packages") ? "active" : ""}
              onClick={() => {
                toggleNav();
                handleNavigate("/packages");
              }}
            >
              <Link to="packages">Packages</Link>
            </li>
            <li
              className={isActive("/testimonials") ? "active" : ""}
              onClick={() => {
                toggleNav();
                handleNavigate("/testimonials");
              }}
            >
              <Link to="testimonials">Testimonials</Link>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle bi ${isNavOpen ? "bi-x" : "bi-list"}`}
            onClick={toggleNav}
          ></i>
        </nav>
        <Link
          to="contact"
          className="cta-btn"
          onClick={() => {
            handleNavigate("/contact");
          }}
        >
          Let's Talk
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
