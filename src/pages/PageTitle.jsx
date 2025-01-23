import React from "react";
import { Link } from "react-router-dom";
const PageTitle = ({
  title = "Page Title",
  backgroundImage = "",
  subtitle = "Contact",
  para = "",
  id = "",
}) => {
  return (
    <div
      className="page-title dark-background"
      data-aos="fade-in"
      data-aos-delay="100"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the dynamic backgroundImage prop
      }}
      id={id}
    >
      <div className="container position-relative mt-5">
        <h1 data-aos="fade-up" data-aos-delay="100">
          {title}
        </h1>{" "}
        {/* Use the title prop here */}
        <p data-aos="fade-up" data-aos-delay="200">
          {para}
        </p>
        <nav className="breadcrumbs" data-aos="fade-up" data-aos-delay="200">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="current">{subtitle}</li>{" "}
            {/* Also update the breadcrumb */}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageTitle;
