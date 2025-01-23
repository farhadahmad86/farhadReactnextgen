import React from "react";
import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Portfolio from "../components/Portfolio";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";

const PrivacyPolicy = () => {
  return (
    <>
      <PageTitle
        title="Privacy Policy"
        backgroundImage="assets/img/LandingPages/about.webp"
        subtitle="Next Gen Studio's Privacy Policy"
      />
      <section id="privacy-policy" className="privacy-policy section container">
        {/* Section Title */}
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ width: "80%" }}
        >
          <h2 style={{ textAlign: "center" }}>Privacy Policy</h2>
          <p>Effective Date: January 1, 2025</p>
        </div>

        <div className="container" style={{ width: "80%" }}>
          <div className="row gy-4">
            <div
              className="col-12 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                Next Gen Studio ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website,{" "}
                <a
                  href="https://nextgenstudio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://nextgenstudio.co
                </a>
                , or use our services. Please read this policy carefully to
                understand our views and practices regarding your personal data.
              </p>

              <h3>1. Information We Collect</h3>
              <ul>
                <li>
                  <strong>1.1 Information You Provide to Us:</strong> <br />
                  Personal Information: Name, email address, phone number, and
                  any other information you provide when you contact us, sign up
                  for our services, or make inquiries. <br />
                  Payment Information: Billing address, credit/debit card
                  details, or other payment information when you make a
                  purchase.
                </li>
                <li>
                  <strong>1.2 Information We Collect Automatically:</strong>
                  Usage Data: IP address, browser type, operating system, pages
                  visited, time spent on the website, and other diagnostic data.{" "}
                  <br />
                  Cookies and Tracking Technologies: Data collected through
                  cookies, beacons, tags, and scripts to analyze website traffic
                  and usage.
                </li>
                <li>
                  <strong>1.3 Information from Third Parties:</strong>
                  We may receive information about you from third-party sources,
                  such as analytics providers, advertising networks, or social
                  media platforms, in accordance with their privacy policies.
                </li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              <p>
                We use the collected information for various purposes,
                including: <br />
                Providing, maintaining, and improving our services. <br />
                Communicating with you, including responding to inquiries and
                sending service updates. <br />
                Processing transactions and managing payments. <br />
                Analyzing website usage to improve user experience. <br />
                Sending marketing communications, if you have opted in. <br />
                Complying with legal obligations and protecting against fraud.
              </p>

              <h3>3. How We Share Your Information</h3>
              <p>
                We do not sell or rent your personal data. However, we may share
                your information with: <br />
                Service Providers: Third-party vendors who help us operate our
                website, process payments, or provide marketing and analytics
                services. <br />
                Legal Obligations: Authorities, if required by law, or to
                protect our rights and safety. <br />
                Business Transfers: In the event of a merger, sale, or
                acquisition of our business assets.
              </p>

              <h3>4. Your Rights and Choices</h3>
              <ul>
                <li>
                  <strong>4.1 Access and Correction:</strong> <br />
                  You can request access to the personal data we hold about you
                  and request corrections to any inaccuracies.
                </li>
                <li>
                  <strong>4.2 Opt-Out:</strong> <br />
                  You can opt out of receiving marketing emails by following the
                  unsubscribe link in our communications.
                </li>
                <li>
                  <strong>4.3 Cookies Management:</strong> <br />
                  You can control cookie preferences through your browser
                  settings.
                </li>
                <li>
                  <strong>4.4 Data Deletion:</strong> <br />
                  You may request the deletion of your personal data, subject to
                  legal and contractual obligations.
                </li>
              </ul>

              <h3>5. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data from unauthorized access,
                disclosure, or loss. However, no method of transmission over the
                Internet or electronic storage is entirely secure, and we cannot
                guarantee absolute security.
              </p>

              <h3>6. International Data Transfers</h3>
              <p>
                If you are accessing our website from outside [Your
                Country/Region], your information may be transferred to and
                processed in a country with different data protection laws. By
                using our services, you consent to such transfers. .
              </p>

              <h3>7. Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these sites and
                encourage you to review their privacy policies.
              </p>

              <h3>8. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with the updated effective date. We
                encourage you to review this policy periodically.
              </p>

              <h3>9. Contact Us</h3>
              <p>
                If you have questions or concerns about this Privacy Policy or
                our data practices, please contact us: <br /> <br />
                Next Gen StudioEmail: [Insert Contact Email]Phone: [Insert
                Contact Phone Number]Address: [Insert Address] <br /> <br />
                Thank you for trusting Next Gen Studio with your information!
              </p>
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
