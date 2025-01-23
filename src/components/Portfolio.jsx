import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('filter-app'); // Default category to show

  useEffect(() => {
    AOS.init({ duration: 1000 });
    GLightbox({
      selector: '.glightbox',
    });
  }, []);

  const portfolioItems = [
    // website
    {
      id: 1,
      category: "filter-app",
      title: "Website 1",
      image: "assets/img/masonry-portfolio/Websites/web-1.webp",
    },
    {
      id: 2,
      category: "filter-app",
      title: "Website 2",
      image: "assets/img/masonry-portfolio/Websites/web-2.webp",
    },
    {
      id: 3,
      category: "filter-app",
      title: "Website 3",
      image: "assets/img/masonry-portfolio/Websites/web-3.webp",
    },
    {
      id: 4,
      category: "filter-app",
      title: "Website 4",
      image: "assets/img/masonry-portfolio/Websites/web-4.webp",
    },
    {
      id: 5,
      category: "filter-app",
      title: "Website 5",
      image: "assets/img/masonry-portfolio/Websites/web-5.webp",
    },
    {
      id: 6,
      category: "filter-app",
      title: "Website 6",
      image: "assets/img/masonry-portfolio/Websites/web-6.webp",
    },
    {
      id: 7,
      category: "filter-app",
      title: "Website 7",
      image: "assets/img/masonry-portfolio/Websites/web-7.webp",
    },
    {
      id: 8,
      category: "filter-app",
      title: "Website 8",
      image: "assets/img/masonry-portfolio/Websites/web-8..webp",
    },
    // Logo
    {
      id: 9,
      category: "filter-product",
      title: "Logo 1",
      image: "assets/img/masonry-portfolio/Logo/logo1.webp",
    },
    {
      id: 10,
      category: "filter-product",
      title: "Logo 2",
      image: "assets/img/masonry-portfolio/Logo/logo2.webp",
    },
    {
      id: 11,
      category: "filter-product",
      title: "Logo 3",
      image: "assets/img/masonry-portfolio/Logo/logo3.webp",
    },
    {
      id: 12,
      category: "filter-product",
      title: "Logo 4",
      image: "assets/img/masonry-portfolio/Logo/logo4.webp",
    },
    {
      id: 13,
      category: "filter-product",
      title: "Logo 5",
      image: "assets/img/masonry-portfolio/Logo/logo5.webp",
    },
    {
      id: 14,
      category: "filter-product",
      title: "Logo 6",
      image: "assets/img/masonry-portfolio/Logo/logo6.webp",
    },
    {
      id: 15,
      category: "filter-product",
      title: "Logo 7",
      image: "assets/img/masonry-portfolio/Logo/logo7.webp",
    },
    {
      id: 16,
      category: "filter-product",
      title: "Logo 8",
      image: "assets/img/masonry-portfolio/Logo/logo8.webp",
    },
    {
      id: 17,
      category: "filter-product",
      title: "Logo 9",
      image: "assets/img/masonry-portfolio/Logo/logo9.webp",
    },
    // Branding
    {
      id: 16,
      category: "filter-branding",
      title: "Branding 1",
      image: "assets/img/masonry-portfolio/Branding/branding1.gif",
    },
    {
      id: 18,
      category: "filter-branding",
      title: "Branding 2",
      image: "assets/img/masonry-portfolio/Branding/branding2.webp",
    },
    {
      id: 19,
      category: "filter-branding",
      title: "Branding 3",
      image: "assets/img/masonry-portfolio/Branding/branding3.webp",
    },
    {
      id: 20,
      category: "filter-branding",
      title: "Branding 2",
      image: "assets/img/masonry-portfolio/Branding/branding4.webp",
    },
    {
      id: 21,
      category: "filter-branding",
      title: "Branding 3",
      image: "assets/img/masonry-portfolio/Branding/branding5.webp",
    },
    {
      id: 22,
      category: "filter-branding",
      title: "Branding 1",
      image: "assets/img/masonry-portfolio/Branding/branding6.webp",
    },
    // Animation
    {
      id: 23,
      category: "filter-animation",
      title: "Animation 1",
      image: "assets/img/masonry-portfolio/animation/animation1.gif",
    },
    {
      id: 24,
      category: "filter-animation",
      title: "Animation 2",
      image: "assets/img/masonry-portfolio/animation/animation2.gif",
    },
    {
      id: 25,
      category: "filter-animation",
      title: "Animation 3",
      image: "assets/img/masonry-portfolio/animation/animation3.gif",
    },
    {
      id: 26,
      category: "filter-animation",
      title: "Animation 4",
      image: "assets/img/masonry-portfolio/animation/animation4.gif",
    },
    {
      id: 27,
      category: "filter-animation",
      title: "Animation 5",
      image: "assets/img/masonry-portfolio/animation/animation5.gif",
    },
    {
      id: 28,
      category: "filter-animation",
      title: "Animation 6",
      image: "assets/img/masonry-portfolio/animation/animation6.gif",
    },
  ];

  const handleFilterChange = (category) => {
    setFilter(category); // Update filter category
  };

  // Filter items based on selected category
  const filteredItems = portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up" style={{ width: "80%" }}>
        <h2>Portfolio</h2>
        {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
      </div>

      <div className="container" style={{ width: "80%" }}>
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li onClick={() => handleFilterChange('filter-app')} className={filter === 'filter-app' ? 'filter-active' : ''}>Website</li>
            <li onClick={() => handleFilterChange('filter-product')} className={filter === 'filter-product' ? 'filter-active' : ''}>Logo</li>
            <li onClick={() => handleFilterChange('filter-branding')} className={filter === 'filter-branding' ? 'filter-active' : ''}>Branding</li>
            <li onClick={() => handleFilterChange('filter-animation')} className={filter === 'filter-animation' ? 'filter-active' : ''}>Animation</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {filteredItems.map(item => (
              <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}>
                <div className="portfolio-img-container">
                  <div className="portfolio-image">
                    <img src={item.image} className="img-fluid" alt={item.title} />
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
