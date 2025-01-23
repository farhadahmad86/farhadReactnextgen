import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./css/tw.css";
import PageTitle from "./PageTitle";
import Portfolio from "../components/Portfolio";
import Footer from "./Footer";
import Contact from "../components/Contact";
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
      category: "tab-logo",
      title: "3D Animated Logo Package",
      price: "$299",
      features: [
        "UNLIMITED Logo Design Concepts",
        "Complete Rendering",
        "By 4 Designers",
        "UNLIMITED Revisions",
        "24 to 48 hours TAT",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
      category: "tab-website",
      title: "Content Management System (CMS)",
      price: "$999",
      features: [
        "Unlimited Pages",
        "Custom Made, Interactive, Dynamic & High-End Design",
        "Custom WP (or) Custom PHP Development",
        "1 jQuery Slider Banner",
        "Up to 10 Custom Made Banner Designs",
        "10 Stock Images",
        "Unlimited Revisions",
        "Special Hoover Effects",
        "Content Management System (CMS)",
        "Online Appointment/Scheduling/Online Automated calendar",
        "Multi-Lingual (Optional)",
        "Custom Dynamic Forms (Optional)",
        "Signup Area (For Newsletters, Offers, etc.)",
        "Search Bar",
        "Live Feeds of Social Networks integration (Optional)",
        "Mobile Responsive",
        "FREE 5 Years Domain Name",
        "Free Google-Friendly Sitemap",
        "Search Engine Submission",
        "Complete W3C Certified HTML",
        "Industry Specified Team of Expert Designers and Developers",
        "Complete Deployment",
        "Unlimited Revisions",
        "Complete Source Files",
        "No Templates, Custom UI UX Designs",
        "100% Ownership Rights",
        "100% Satisfaction and Money Back Guarantee**",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
        "Order Now",
      ],
    },
    {
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
    {
      id: 15,
      category: "tab-social",
      title: "Gold Package",
      price: "$199",
      features: [
        "Social Media Marketing Plan",
        "Content Creation For The Posts",
        "Progress Reporting",
        "Manage Facebook Page",
        "Weekly 3 FB Posts",
        "Artwork Creation For The Posts",
        "FB Profile Image Design",
        "Manage Instagram Page",
        "Weekly 3 Instagram Posts",
        "Profile Keyword Optimization",
      ],
    },
    {
      id: 16,
      category: "tab-social",
      title: "Platinum Package",
      price: "$299",
      features: [
        "Social Media Marketing Plan",
        "Content Creation For The Posts",
        "Progress Reporting",
        "Manage Facebook Page",
        "Weekly 5 FB Posts",
        "Artwork Creation For The Posts",
        "FB Profile Image Design",
        "Manage Instagram Page",
        "Weekly 5 Instagram Posts",
        "Profile Keyword Optimization",
        "Manage Instagram Account",
      ],
    },
    {
      id: 17,
      category: "tab-social",
      title: "Diamond Package",
      price: "$399",
      features: [
        "Social Media Marketing Plan",
        "Content Creation For The Posts",
        "Progress Reporting",
        "Manage Facebook Page",
        "Weekly 7 FB Posts",
        "Artwork Creation For The Posts",
        "FB Profile Image Design",
        "Manage Instagram Page",
        "Weekly 7 Instagram Posts",
        "Instagram Background Design",
        "Account/Company Page",
        "Profile Keyword Optimization",
      ],
    },
    {
      id: 18,
      category: "tab-animation",
      title: "2D Basic Package",
      price: "$499",
      features: [
        "30 Second Video",
        "Script Writing",
        "Storyboard",
        "Basic 2D Animation",
        "Music & Sound FX",
        "Delivery 5 - 6 weeks",
      ],
    },
    {
      id: 19,
      category: "tab-animation",
      title: "2D Premium Package",
      price: "$999",
      features: [
        "60 Second Video",
        "Script Writing",
        "Storyboard",
        "Professional Voice Over",
        "2D/Cartoon/Character Animation",
        "Music & Sound FX",
        "Delivery 4 weeks",
      ],
    },
    {
      id: 20,
      category: "tab-animation",
      title: "3D Video Package",
      price: "$1,499",
      features: [
        "60 Second Video",
        "Script Writing",
        "Storyboard",
        "Professional Voice Over",
        "2D/Cartoon/Character Animation",
        "Music & Sound FX",
        "Delivery 4 weeks",
      ],
    },
    {
      id: 21,
      category: "tab-branding",
      title: "Basic Package",
      price: "$199",
      features: [
        "Print Media Design",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Flyer Design/Postcard (anyone)",
        "100% Ownership Rights",
        "Printing Service",
        "500 x Business Card Prints OR 250 x Flyer Prints",
      ],
    },
    {
      id: 22,
      category: "tab-branding",
      title: "Professional Package",
      price: "$399",
      features: [
        "Print Media Design",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Flyer Design/Postcard (anyone)",
        "Printing Service",
        "500 x Business Card Prints",
        "500 x Letterhead Prints",
        "500 x Envelope Prints",
        "100 x Flyer Prints",
      ],
    },
    {
      id: 23,
      category: "tab-branding",
      title: "Corporate Package",
      price: "$799",
      features: [
        "Print Media Design",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Flyer Design/Postcard/Menu Card (anyone)",
        "Brochure/Product Packaging Design (anyone)",
        "Apparel Design (T-Shirt, Cap, Bumper Sticker)",
        "Printing Service",
        "1000 Prints Each (Business Card, Letterhead, Envelope)",
        "250 x Flyer/Brochure/Menu Card Prints",
        "50 x T-Shirt Prints",
      ],
    },
  ];

  // Filter items based on the active tab
  const filteredPricing = pricingData.filter(
    (item) => item.category === activeTab
  );

  return (
    <>
      <PageTitle
        id="pad2"
        title="Empowering Your Vision with Tailored Solutions"
        backgroundImage="assets/img/LandingPages/prices.webp"
        subtitle="Packages & Pricing"
        para="From concept to launch and growth, we’re here to provide solutions
            that match your goals and budget. At Next Gen Studio, our packages
            are crafted to deliver quality, transparency, and measurable success
            every step of the way."
      />
      <section id="portfolio" className="portfolio section">
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ width: "80%" }}
        >
          <h2>Packages & Pricing</h2>
          {/* <p>
            From concept to launch and growth, we’re here to provide solutions
            that match your goals and budget. At Next Gen Studio, our packages
            are crafted to deliver quality, transparency, and measurable success
            every step of the way.
          </p> */}
        </div>

        <div className="container" style={{ width: "80%" }}>
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul
              className="pricing-tabs"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li
                className={activeTab === "tab-logo" ? "tab-active" : ""}
                onClick={() => setActiveTab("tab-logo")}
                id="prc_sec"
              >
                Logo
              </li>
              <li
                className={activeTab === "tab-website" ? "tab-active" : ""}
                onClick={() => setActiveTab("tab-website")}
                id="prc_sec"
              >
                Website
              </li>
              <li
                className={activeTab === "tab-ecommerce" ? "tab-active" : ""}
                onClick={() => setActiveTab("tab-ecommerce")}
                id="prc_sec"
              >
                E-Commerce
              </li>
              <li
                className={activeTab === "tab-seo" ? "tab-active" : ""}
                onClick={() => setActiveTab("tab-seo")}
                id="prc_sec"
              >
                SEO
              </li>
              <li
                className={activeTab === "tab-social" ? "tab-active" : ""}
                onClick={() => setActiveTab("tab-social")}
                id="prc_sec"
              >
                Social Media
              </li>
              <li
                className={activeTab === "tab-animation" ? "tab-active" : ""}
                onClick={() => setActiveTab("tab-animation")}
                id="prc_sec"
              >
                Animation
              </li>
              <li
                className={activeTab === "tab-branding" ? "tab-active" : ""}
                onClick={() => setActiveTab("tab-branding")}
                id="prc_sec"
              >
                Branding
              </li>
            </ul>

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
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default Pricing;
