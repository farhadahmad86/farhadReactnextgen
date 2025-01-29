import React from "react";
import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Contact from "../components/Contact";

const PrivacyPolicy = () => {
  return (
    <>
      <PageTitle
        title="Privacy Policy"
        backgroundImage="assets/img/LandingPages/about.webp"
        subtitle="NextGen Studio's Privacy Policy"
      />
      <section id="privacy-policy" className="privacy-policy section container">
        {/* Section Title */}
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ width: "80%" }}
        >
          <h2 style={{ textAlign: "center" }}>Privacy Policy</h2>
          <p>Effective Date: 30/12/2024</p>
        </div>

        <div className="container" style={{ width: "80%" }}>
          <div className="row gy-4">
            <div
              className="col-12 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                At NextGen Studio ("we," "us," or "our"), your privacy is a top
                priority. This Privacy Policy explains how we collect, use, and
                protect your information when you visit our website (
                <a
                  href="https://nextgenstudio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nextgenstudio.co
                </a>
                ) or interact with our services. By using our website, you agree
                to the terms outlined in this Privacy Policy.
              </p>

              <h3>1. Information We Collect</h3>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>a. Personal Information:</strong>
                  <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number (if you provide it through our forms)</li>
                    <li>
                      Payment information (if applicable, for purchases)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>b. Non-Personal Information:</strong>
                  <ul>
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent on our site</li>
                  </ul>
                </li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              <p>We use the information collected to:</p>
              <ul>
                <li>Provide and improve our services.</li>
                <li>Process transactions.</li>
                <li>Send promotional messages (with your consent).</li>
                <li>Respond to inquiries and support requests.</li>
                <li>Comply with legal obligations.</li>
              </ul>

              <h3>3. Sharing Your Information</h3>
              <p>We do not sell or rent your information. However, we may share your information with:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> For payment processing, email communication, or analytics.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> If required to comply with legal obligations.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, sale, or acquisition.
                </li>
              </ul>

              <h3>4. Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and similar technologies to enhance your browsing
                experience. You can adjust your browser settings to refuse
                cookies, but this may impact site functionality.
              </p>

              <h3>5. Your Rights</h3>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>Access and request a copy of your data.</li>
                <li>Correct or delete your data.</li>
                <li>Opt-out of receiving promotional communications.</li>
              </ul>
              <p>
                To exercise these rights, contact us at{" "}
                <a href="mailto:info@nextgenstudio.co">
                  info@nextgenstudio.co
                </a>
              </p>

              <h3>6. Data Retention</h3>
              <p>
                We retain your information as long as necessary to fulfill the
                purposes outlined in this Privacy Policy or as required by law.
              </p>

              <h3>7. Security</h3>
              <p>
                We implement industry-standard measures to protect your
                information. However, no method of transmission over the
                internet is 100% secure.
              </p>

              <h3>8. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy periodically. Changes will be
                posted on this page with an updated effective date.
              </p>

              <h3>9. Contact Us</h3>
              <p>
                If you have questions or concerns about this Privacy Policy,
                please contact us:
              </p>
              <ul>
                <li>
                  Website:{" "}
                  <a
                    href="https://nextgenstudio.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    nextgenstudio.co
                  </a>
                </li>
                <li>Email: info@nextgenstudio.co</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
