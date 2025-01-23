import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import "./css/tw.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("filter-backend"); // Default is Backend

  useEffect(() => {
    AOS.init({ duration: 1000 });
    GLightbox({
      selector: ".glightbox",
    });
  }, []);

  // Define portfolio items for different categories
  const portfolioItems = [
    // Backend Items
    {
      id: 1,
      category: "filter-backend",
      title: "Java",
      image: "assets/img/technologies/Back End/Java.webp",
    },
    {
      id: 2,
      category: "filter-backend",
      title: "NodeJs",
      image: "assets/img/technologies/Back End/NodeJs.webp",
    },
    {
      id: 3,
      category: "filter-backend",
      title: "PHP",
      image: "assets/img/technologies/Back End/Php.webp",
    },

    // Frontend Items
    {
      id: 4,
      category: "filter-frontend",
      title: "AngularJS",
      image: "assets/img/technologies/Front End/Html5.webp",
    },
    {
      id: 5,
      category: "filter-frontend",
      title: "Html5",
      image: "assets/img/technologies/Front End/AngularJs.webp",
    },
    {
      id: 6,
      category: "filter-frontend",
      title: "Typescript",
      image: "assets/img/technologies/Front End/Typescript.webp",
    },
    {
      id: 7,
      category: "filter-frontend",
      title: "Vue",
      image: "assets/img/technologies/Front End/Vue.webp",
    },

    // CMS Items
    {
      id: 8,
      category: "filter-cms",
      title: "Shopify",
      image: "assets/img/technologies/CMS/Shopify.webp",
    },
    {
      id: 9,
      category: "filter-cms",
      title: "Wix",
      image: "assets/img/technologies/CMS/Wix.webp",
    },
    {
      id: 10,
      category: "filter-cms",
      title: "Wordpress",
      image: "assets/img/technologies/CMS/Wordpress.webp",
    },

    // Servers Items
    {
      id: 11,
      category: "filter-servers",
      title: "AWS",
      image: "assets/img/technologies/Servers/AWS.webp",
    },
    {
      id: 12,
      category: "filter-servers",
      title: "Cloudways",
      image: "assets/img/technologies/Servers/Cloudways.webp",
    },
    {
      id: 13,
      category: "filter-servers",
      title: "Hostinger",
      image: "assets/img/technologies/Servers/Hostinger.webp",
    },
    {
      id: 14,
      category: "filter-servers",
      title: "Rackspace",
      image: "assets/img/technologies/Servers/Rackspace.webp",
    },

    // Software Items
    {
      id: 15,
      category: "filter-software",
      title: "Blender",
      image: "assets/img/technologies/Softwares/Blender.webp",
    },
    {
      id: 16,
      category: "filter-software",
      title: "Dreamweaver",
      image: "assets/img/technologies/Softwares/Dreamweaver.webp",
    },
    {
      id: 17,
      category: "filter-software",
      title: "Illustrator",
      image: "assets/img/technologies/Softwares/Illustrator.webp",
    },
    {
      id: 18,
      category: "filter-software",
      title: "Photoshop",
      image: "assets/img/technologies/Softwares/Photoshop.webp",
    },
    {
      id: 19,
      category: "filter-software",
      title: "Xd",
      image: "assets/img/technologies/Softwares/Xd.webp",
    },
  ];

  // Handle filter change
  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Filtered items based on category selection
  const filteredItems = portfolioItems.filter(
    (item) => item.category === filter
  );

  return (
    <section id="portfolio" className="portfolio section technologies-portfolio">
  <div className="container section-title" data-aos="fade-up" style={{ width: "57%" }}>
    <h2>Technologies we work with</h2>
  </div>

  <div className="container" style={{ width: "57%" }}>
    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
      {/* Filters */}
      <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
        <li
          onClick={() => handleFilterChange("filter-backend")}
          className={filter === "filter-backend" ? "filter-active" : ""}
          id="tws"
        >
          Backend
        </li>
        <li
          onClick={() => handleFilterChange("filter-frontend")}
          className={filter === "filter-frontend" ? "filter-active" : ""}
          id="tws"
        >
          Frontend
        </li>
        <li
          onClick={() => handleFilterChange("filter-cms")}
          className={filter === "filter-cms" ? "filter-active" : ""}
          id="tws"
        >
          CMS
        </li>
        <li
          onClick={() => handleFilterChange("filter-servers")}
          className={filter === "filter-servers" ? "filter-active" : ""}
          id="tws"
        >
          Servers
        </li>
        <li
          onClick={() => handleFilterChange("filter-software")}
          className={filter === "filter-software" ? "filter-active" : ""}
          id="tws"
        >
          Software
        </li>
      </ul>

      {/* Portfolio Items */}
      <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200" style={{ justifyContent: "center" }}>
        {filteredItems.map((item) => (
          <div key={item.id} className="col-lg-2 col-md-6 portfolio-item">
            <div className="tech-portfolio-img-container">
              <div className="tech-portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="tech-portfolio-content">
                <h4>{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default Portfolio;
