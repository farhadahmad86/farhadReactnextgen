import React from "react";
import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <>
      <PageTitle
        title="Terms and Conditions"
        backgroundImage="assets/img/LandingPages/about.webp"
        subtitle="NextGen Studio's Terms and Conditions"
      />
      <section
        id="terms-conditions"
        className="terms-conditions section container"
      >
        {/* Section Title */}
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ width: "80%" }}
        >
          <h2 style={{ textAlign: "center" }}>
            Terms and Conditions – NextGen Studio
          </h2>
        </div>

        <div className="container" style={{ width: "80%" }}>
          <div className="row gy-4">
            <div
              className="col-12 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>1. Quotes and Estimates</h3>
              <p>
                All quotes are based on our understanding of your project
                requirements and the agreed-upon timeline. Any changes to the
                agreed functionality, including minor enhancements, may result
                in additional charges. To avoid misunderstandings, please ensure
                all requirements are clarified during a consultation meeting.
              </p>

              <h3>2. Acceptance of Proposals</h3>
              <p>
                By accepting a proposal from NextGen Studio, you agree to our
                terms and conditions. Acceptance can be communicated through
                verbal agreement, email confirmation, payment of the initiation
                fee, or signing the project proposal.
              </p>

              <h3>3. Client Responsibilities</h3>
              <ul>
                <li>
                  Clients are responsible for providing clear and detailed
                  instructions, including content, workflows, and any specific
                  requirements.
                </li>
                <li>
                  If instructions are vague or incomplete, NextGen Studio will
                  proceed based on its understanding of the requirements.
                  Subsequent changes may result in additional costs.
                </li>
                <li>
                  Clients must disclose any complexities related to tasks
                  upfront to ensure accurate costing.
                </li>
              </ul>

              <h3>4. Project Scope and Management</h3>
              <ul>
                <li>
                  Working hours for each task (e.g., design, development,
                  marketing) are pre-allocated and include minor revisions.
                </li>
                <li>
                  Any delays caused by the client may result in timeline
                  adjustments and additional fees.
                </li>
                <li>
                  Requests for design or functionality changes after approval
                  will incur extra charges.
                </li>
              </ul>

              <h3>5. Timelines and Delays</h3>
              <p>
                NextGen Studio will strive to complete projects on time.
                However, delays due to unforeseen circumstances, third-party
                dependencies, or client inaction will not be the responsibility
                of NextGen Studio.
              </p>
              <h3>6. Testing and Compatibility</h3>
              <ul>
                <li>
                  Websites and applications are tested for compatibility with
                  modern browsers (Google Chrome, Firefox, Safari, Microsoft
                  Edge) on desktops and laptops.
                </li>
                <li>
                  Mobile responsiveness is tested on common devices. Specific
                  device testing must be requested in advance.
                </li>
                <li>
                  For projects hosted outside NextGen Studio’s servers,
                  additional charges may apply for troubleshooting
                  server-related issues.
                </li>
              </ul>
              <h3>7.Intellectual Property and Licensing</h3>
              <ul>
                <li>
                  All custom code and assets created by NextGen Studio are its
                  intellectual property.
                </li>
                <li>
                  Full rights to the code may be transferred to the client upon
                  settlement of all dues and for agreed purposes only. Resale or
                  redistribution of the code is prohibited.
                </li>
              </ul>
              <h3>8. Third-Party Components:</h3>
              <ul>
                <li>
                  Projects may include third-party tools such as payment
                  gateways, SSL certificates, or plugins.While NextGen Studio
                  ensures compatibility, limitations of third-party components
                  are outside our control.
                </li>
                <li>
                  Costs for third-party tools are not included in quotes unless
                  explicitly stated.
                </li>
              </ul>

              <h3>9. Non-Responsiveness and Project Suspension:</h3>
              <ul>
                <li>
                  Projects delayed due to client non-responsiveness for over two
                  months may incur an administrative fee of $59/week.
                </li>
                <li>
                  If the project needs to be put on hold, clients must provide
                  written notice in advance.
                </li>
              </ul>

              <h3>10. Data Responsibility and Migration:</h3>
              <ul>
                <li>
                  NextGen Studio is not liable for data loss or errors during
                  website or application migration to a third-party agency.
                </li>
                <li>
                  Migration support can be arranged at an additional cost.
                </li>
              </ul>

              <h3>11. Attribution and Support:</h3>
              <ul></ul>
              <ul>
                <li>
                  A "Powered by NextGen Studio" attribution will be included in
                  all projects.Removal of this attribution voids ongoing support
                  and maintenance services.
                </li>
                <li>
                  Continued support requires adherence to this attribution
                  policy.
                </li>
              </ul>

              <h3>12. Communication and Collaboration:</h3>
              <ul></ul>
              <ul>
                <li>
                  Communication will primarily occur via email or video
                  conferencing platforms.
                </li>
                <li>
                  Both parties are encouraged to maintain open communication to
                  resolve any issues promptly and amicably.
                </li>
              </ul>

              <h3>13. Deadlines and Completion:</h3>
              <ul></ul>
              <ul>
                <li>
                  Projects are expected to be completed within 60 days unless
                  otherwise specified.
                </li>
                <li>
                  Delays caused by changes in scope, client non-responsiveness,
                  or unforeseen circumstances will be communicated immediately,
                  with potential solutions discussed collaboratively.
                </li>
              </ul>

              <h3>14. Third-Party Integrations:</h3>
              <ul></ul>
              <ul>
                <li>
                  Integration with third-party APIs or tools may extend project
                  timelines due to dependencies outside NextGen Studio’s
                  control.
                </li>
                <li>
                  Clients will be informed of any potential impacts on schedules
                  or costs.
                </li>
              </ul>

              <h3>15. Termination of Projects</h3>
              <ul>
                <li>
                  Projects may only be transferred to another agency for valid
                  reasons such as business changes or conflicts.
                </li>
                <li>
                  Unjustifiedtransfers may result in legal action by NextGen
                  Studio.
                </li>
              </ul>
              <h3>16. SMS Communications</h3>
              <p>
                By opting into SMS communications from NextGenStudio, you agree
                to the following:
              </p>
              <ul>
                <li>
                  <strong>Message Purpose:</strong> You consent to receive
                  automated text messages about project updates, reminders, and
                  promotional offers.
                </li>
                <li>
                  <strong>Message Frequency:</strong> You may receive up to 4
                  messages per month.
                </li>
                <li>
                  <strong>Fees:</strong> Message and data rates may apply; check
                  with your carrier.
                </li>
                <li>
                  <strong>Opt-Out:</strong> Reply “STOP” at any time to
                  unsubscribe. A confirmation will be sent, and no further
                  messages will be received.
                </li>
                <li>
                  <strong>Support:</strong> For assistance, reply “HELP” or
                  contact us at{" "}
                  <Link to="mailto:support@nextgenstudio.co">
                    support@nextgenstudio.co
                  </Link>
                  , call <Link to="tel:+13072630994">(307) 263-0994</Link>, or
                  visit{" "}
                  <Link
                    to="http://www.nextgenstudio.co"
                    onClick={() => {
                      handleNavigate("/PrivacyPolicy");
                    }}
                  >
                    www.nextgenstudio.co
                  </Link>
                  .
                </li>
                <li>
                  <strong>Privacy:</strong> Your information will be used only
                  for SMS communication. View our Privacy Policy at{" "}
                  <Link
                    to="/PrivacyPolicy"
                    onClick={() => {
                      handleNavigate("/PrivacyPolicy");
                    }}
                  >
                    www.nextgenstudio.co/privacy-policy
                  </Link>
                  .
                </li>
                <li>
                  By opting in, you confirm your agreement to these terms.
                </li>
              </ul>

              <h3>Your Commitment to Collaboration</h3>
              <p>
                We at NextGen Studio value clear communication and partnership
                throughout the project lifecycle. By adhering to these terms, we
                ensure a smooth and productive collaboration, delivering quality
                results efficiently and effectively.
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

export default TermsAndConditions;
