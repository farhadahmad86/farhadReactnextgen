import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../pages/css/tw.css";

import { Link } from "react-router-dom"; 
const Pricing = () => {
  const [activeTab, setActiveTab] = useState("tab-logo"); // Default active tab

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Pricing data
  const pricingData = [
    {
      id: 1,
      category: "tab-logo",
      title: "Basic Logo Package",
      price: "$99",
      features: [
        "3 Custom Logo Design Concepts",
        "1 Dedicated Designer",
        "4 Revisions",
        "48 to 72 hours TAT",
        "All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
        "100% Ownership Rights",
      ],
    },
    {
      id: 2,
      category: "tab-logo",
      title: "Illustrative Logo Package",
      price: "$199",
      features: [
        "UNLIMITED Logo Design Concepts",
        "By 2 Designers Artist",
        "UNLIMITED Revisions",
        "48 to 72 hours TAT",
        "All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
        "100% Ownership Rights",
      ],
    },
    {
      id: 3,
      category: "tab-logo",
      title: "Professional Logo Package",
      price: "$299",
      features: [
        "UNLIMITED Logo Design Concepts",
        "By 8 Design Artist",
        "UNLIMITED Revisions",
        "2 Stationary Design Sets",
        "Double Sided Flyer Design",
        "Bi-Fold Brochure",
        "FREE MS Word Letterhead",
        "Social Media Banners Design",
        "Free Email Signature",
        "FREE Fax Template",
        "All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
    {
      id: 4,
      category: "tab-website",
      title: "Basic Informative Package",
      price: "$499",
      features: [
        "2 Pages Website Design",
        "HTML Based",
        "1 Banner Design",
        "2 Stock Photos",
        "Contact/Query Form",
        "FAQs",
        "Complete W3C Certified HTML",
        "Complete Deployment",
        "Unlimited Revisions",
        "Complete Source Files",
        "100% Ownership Rights",
        "100% Satisfaction and Money Back Guarantee**",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      id: 5,
      category: "tab-website",
      title: "Promotional Informative Package",
      price: "$799",
      features: [
        "Up to 7 Pages Website Design",
        "HTML Based",
        "Content Management System (CMS)",
        "Hover Effects",
        "2 Banner Designs",
        "Sliding Banner",
        "5 Stock Photos",
        "Contact/Query Form",
        "FAQs",
        "Search Engine Optimized",
        "Complete W3C Certified HTML",
        "Complete Deployment",
        "Value Added Services",
        "Mobile Responsive",
        "Complete Source Files",
        "100% Ownership Rights",
        "100% Satisfaction and Money Back Guarantee**",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      id: 6,
      category: "tab-website",
      title: "Professional Informative Package",
      price: "$999",
      features: [
        "Up to 10 Unique Pages Website Design",
        "Custom, Interactive, Dynamic & High-End Web Design",
        "Custom WordPress Development",
        "5 Stock Images",
        "5 Banner Designs",
        "Sliding Banners",
        "Content Management System (WordPress)",
        "Online Appointment / Booking / Scheduling",
        "Automated Calendar",
        "Special Hover Effects",
        "Google Friendly Sitemap",
        "Mobile Responsive",
        "Search Engine Optimized",
        "Complete W3C Certified HTML",
        "Complete Deployment",
        "Unlimited Revisions",
        "Complete Source Files",
        "Industry-specified Team of Expert Designers and Developers",
        "No Templates, Custom UI UX Designs",
        "100% Ownership Rights",
        "100% Satisfaction and Money Back Guarantee**",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      id: 7,
      category: "tab-ecommerce",
      title: "Startup eCommerce Package",
      price: "$799",
      features: [
        "Up to 10 Pages Website Design",
        "Customized Design",
        "Up to 100 Products",
        "Content Management System (CMS)",
        "Mini Shopping Cart Integration",
        "Payment Module Integration",
        "Easy Product Search",
        "Dedicated designer & developer",
        "Unlimited Revisions",
        "Complete Source Files",
        "100% Ownership Rights",
        "100% Satisfaction and Money Back Guarantee**",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      id: 8,
      category: "tab-ecommerce",
      title: "Professional eCommerce Package",
      price: "$1299",
      features: [
        "Up to 15 Pages Website Design",
        "Customized Design",
        "Up to 500 Products",
        "Content Management System (CMS)",
        "Interactive Sliding Banners",
        "Customize WordPress (or) PHP Development",
        "10 Stock Images",
        "10 Banner Designs",
        "5 Promotional Banners",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content Management System (WordPress or Custom)",
        "Mobile Responsive",
        "Online Appointment/Booking/Scheduling/Online Ordering Integration",
        "Automated Calendar",
        "Multiple Payment Integration (Optional)",
        "Google Friendly Sitemap",
        "Team of Expert Designers & Developers",
        "100% Ownership Rights",
        "100% Satisfaction and Money Back Guarantee**",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      id: 9,
      category: "tab-ecommerce",
      title: "Corporate eCommerce Package",
      price: "$1999",
      features: [
        "Up to 15 to 20 Pages Website",
        "Up to 1000 Products",
        "SEO Meta Tags",
        "Custom Made, Interactive, Dynamic & High-End Design",
        "Full Shopping Cart Integration",
        "Easy Product Search",
        "Custom WP (or) Custom PHP Development",
        "1 jQuery Slider Banner",
        "Up to 10 Custom Made Banner Designs",
        "10 Stock Images",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content Management System (CMS)",
        "Mobile Responsive",
        "Online Appointment/Booking/Scheduling/Online Ordering Integration",
        "Automated Calendar",
        "Multi Lingual (Optional)",
        "Custom Dynamic Forms (Optional)",
        "Product Reviews",
        "Signup Area (For Newsletters, Offers etc.)",
        "Google Friendly Sitemap",
        "Search Engine Submission",
        "FREE 5 Years Domain Name",
        "Complete W3C Certified HTML",
        "Industry Specified Team of Expert Designers and Developers",
        "Unlimited Revisions",
        "Complete Deployment",
        "100% Ownership Rights",
        "100% Satisfaction and Money Back Guarantee**",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
    {
      id: 10,
      category: "tab-seo",
      title: "Startup SEO Package",
      price: "$299",
      features: [
        "Campaign Setup and Optimization",
        "Website Audit",
        "Pages Optimized (5 pages)",
        "15 Selected Keywords Targeting",
        "Keyword Research",
        "Keyword Grouping",
        "On-Page Optimization",
        "SEO Road Map",
        "Blog Creation",
        "Webpage Copywriting (3 pages, 350 words per page)",
        "Title Tag Optimization (10 titles)",
        "Meta Description Optimization (10 meta description)",
        "Meta Keyword Optimization (10 meta keywords)",
        "Domain Redirect Optimization (10 domain redirects)",
        "XML Sitemap Optimization",
        "Robots.txt Check",
        "URL Rewrites (10 URL rewrites)",
        "Broken Link Report",
        "Rich Snippet Recommendations",
        "Breadcrumbs",
        "Initial Off-Page SEO",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ’s",
        "Link Building",
        "Directory Submission",
        "Local Business Listings",
      ],
    },
    {
      id: 11,
      category: "tab-seo",
      title: "Scaling SEO Package",
      price: "$499",
      features: [
        "Prior Analysis",
        "Business Analysis",
        "Consumer Analysis",
        "Competitor Analysis",
        "30 Selected Keywords Targeting",
        "10 Pages Keyword Targeted",
        "Webpage Optimization",
        "Meta Tags Creation",
        "Keyword Optimization",
        "Image Optimization",
        "Inclusion of anchors",
        "Tracking & Analysis",
        "Google Analytics Installation",
        "Google Webmaster Installation",
        "Call To Action Plan",
        "Creation of Sitemaps",
        "Monthly Reporting",
        "Recommendation",
        "Email Support",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ’s",
        "Link Building",
        "Directory Submission",
        "Local Business Listings",
      ],
    },
    {
      id: 12,
      category: "tab-seo",
      title: "Venture SEO Package",
      price: "$799",
      features: [
        "Prior Analysis",
        "Business Analysis",
        "Consumer Analysis",
        "Competitor Analysis",
        "60+ Selected Keywords Targeting",
        "30 Pages Keyword Targeted",
        "Webpage Optimization",
        "Meta Tags Creation",
        "Keyword Optimization",
        "Image Optimization",
        "Inclusion of anchors",
        "Tracking & Analysis",
        "Google Analytics Installation",
        "Google Webmaster Installation",
        "Google Places Inclusions",
        "Call To Action Plan",
        "Google Analytics Installation",
        "Creation of Sitemaps",
        "Reporting",
        "Phone Support",
        "Off Page Optimization",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ’s",
        "Link Building",
        "Directory Submission",
        "Local Business Listings",
      ],
    },
  ];

  // Filter items based on the active tab
  const filteredPricing = pricingData.filter(
    (item) => item.category === activeTab
  );

  return (
    <section className="pricing section">
        <div className="container" data-aos="fade-up">
          <div
            className="container section-title"
            data-aos="fade-up"
            style={{ width: "80%" }}
          >
            <h2>Affordable packages that suits your budget</h2>
          </div>
          <div className="container" style={{ width: "80%" }}>
            {/* Tabs */}
            <ul
              className="pricing-tabs"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li
                className={activeTab === "tab-logo" ? "tab-active" : ""}
                onClick={() => setActiveTab("tab-logo")}
                id="prc"
              >
                Logo
              </li>
              <li
                className={activeTab === "tab-website" ? "tab-active" : ""}
                onClick={() => setActiveTab("tab-website")}
                id="prc"
              >
                Website
              </li>
              <li
                className={activeTab === "tab-ecommerce" ? "tab-active" : ""}
                onClick={() => setActiveTab("tab-ecommerce")}
                id="prc"
              >
                E-Commerce
              </li>
              <li
                className={activeTab === "tab-seo" ? "tab-active" : ""}
                onClick={() => setActiveTab("tab-seo")}
                id="prc"
              >
                SEO
              </li>
            </ul>

            {/* Pricing Cards */}
            <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
              {filteredPricing.map((pkg) => (
                <div
                  key={pkg.id}
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={pkg.id * 100}
                >
                  <div className="pricing-card">
                    <h3 className="pricing-title">{pkg.title}</h3>
                    <p className="pricing-price">{pkg.price}</p>
                    <ul className="pricing-features">
                      {pkg.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <Link
                     onClick={() => {
                      handleNavigate("/contact");
                    }}
              to="/contact"
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
              <span>Get Started</span>
            </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="button-group mt-4"
            data-aos="fade-in"
            data-aos-delay="200"
            style={{ justifyContent: "center" }}
          >
            <Link
              onClick={() => {
                handleNavigate("/packages");
              }}
              to="/packages"
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
              <span>View All Packages</span>
            </Link>
          </div>
        </div>
      </section>
  );
};

export default Pricing;
