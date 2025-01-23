import React, { useState } from "react";
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
    <section id="contact" className="contact section light-background">
      {/* Section Title */}
      <div
        className="container section-title"
        data-aos="fade-up"
        style={{ width: "80%" }}
      >
        <h2>Contact</h2>
        <h3>Ready for Liftoff?</h3>
        <p>
          Get in Touch! Interested in having a conversation
          or simply want to bounce an idea off our team? Send us a note and
          we’ll get in touch with you right away.
        </p>
      </div>
      {/* End Section Title */}

      <div
        className="container"
        data-aos="fade"
        data-aos-delay="100"
        style={{ width: "55%" }}
      >
        <div className="row">
          {/* Contact Info */}
          {/* <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div> */}

          {/* Contact Form */}
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
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
