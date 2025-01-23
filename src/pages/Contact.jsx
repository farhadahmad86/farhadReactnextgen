import React, { useState } from "react";
import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Reviews from "../components/Reviews";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    errorMessage: "",
    successMessage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      // websiteUrl: "",
      phone: "",
    });
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Your message has been sent successfully!',
    });

    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true });

    try {
      const response = await fetch('https://nextgenstudio.co/forms/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors', // Do not use if server sends back JSON data
      });

      const result = await response.json();
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        // websiteUrl: "",
        phone: "",
      });
      if (response.ok) {
        setFormStatus({
          loading: false,
          errorMessage: '',
          successMessage: result.success,
        });
        // Clear form data after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus({
          loading: false,
          errorMessage: result.error,
          successMessage: '',
        });
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        errorMessage: 'There was an error sending your message. Please try again later.',
        successMessage: '',
      });
    }
  };

  return (
    <>
      <PageTitle title="Got a Project Idea?" backgroundImage="assets/img/LandingPages/contact.webp" subtitle="Let's Talk" />
      <section id="contact" className="contact section light-background">
        <div className="container section-title" data-aos="fade-up" style={{ width: "80%" }}>
          <h2>Contact</h2>
          <h3>Ready to Begin?</h3>
          <p>Our support team is here to help you launch.</p>
        </div>
        <div className="container" data-aos="fade" data-aos-delay="100" style={{ width: "55%" }}>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-2">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" name="phone" placeholder="Your Phone" required value={formData.phone} onChange={handleInputChange} />
                  </div>
                  {/* <div className="col-md-6">
                    <input type="url" className="form-control" name="websiteUrl" placeholder="Your Website URL" required value={formData.websiteUrl} onChange={handleInputChange} />
                  </div> */}
                  <div className="col-md-6">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Tell Us Your Project" required value={formData.message} onChange={handleInputChange}></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    {/* {formStatus.loading && <div className="loading">Loading...</div>}
                    {formStatus.errorMessage && <div className="error-message">{formStatus.errorMessage}</div>}
                    {formStatus.successMessage && <div className="success-message">{formStatus.successMessage}</div>} */}
                    <button type="submit" disabled={formStatus.loading}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
               {/* Contact Info */}
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>1309 Coffeen Ave, 1200, Sheridan, WY 8280</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>(307) 263 0994</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@nextgenstudio.co</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
  <iframe
    style={{ border: "0", width: "100%", height: "350px" }}
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11328.611633097704!2d-106.95234418993431!3d44.77768791884019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1309%20Coffeen%20Ave%2C%201200%2C%20Sheridan%2C%C2%A0WY%C2%A08280!5e0!3m2!1sen!2s!4v1734986960538!5m2!1sen!2s"
    frameBorder="0"
    allowFullScreen
    title="Google Map Location"
  ></iframe>
</div>

          </div>
        </div>
      </section>
      <Reviews />
      <Footer />
    </>
  );
};

export default Contact;