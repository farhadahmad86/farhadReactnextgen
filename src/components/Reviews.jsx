import React, { useState, useEffect } from "react";
import "../pages/css/tw.css";

const Reviews = () => {
  const testimonials = [
    {
      name: "Andrew Randazzo",
      position: "CEO @ Prime medical Training",
      review:
        "We appreciate the work that has been done for us by NextGen Studio. They have shown things at their best level. Their guidance, service, feedback, response and traffic at our presentations and our recently designed booth at a conference held currently were extremely positive.",
      image: "assets/img/testimonials/test-1.webp",
    },
    {
      name: "John Mitton",
      position: "Art Director @ Skybluetheatre",
      review:
        "Working with NextGen Studio has been an absolute pleasure. Personable, professional and easy to contact with last minute adjustments. Having done an excellent job on building our dynamic website we had no hesitation in contacting NextGen Studio again for a second website build project.",
      image: "assets/img/testimonials/test-2.webp",
    },
    {
      name: "Jo Radcliffe",
      position: "Co-founder & director @ 404team",
      review:
        "We are delighted with our website. It was a pleasure to work with these guys who worked tirelessly with us to achieve the look and level of detail required.Good communicators and great at keeping the momentum going.",
      image: "assets/img/testimonials/test-3.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="reviews-section">
      <div className="container section-title" data-aos="fade-up">
        {/* <h2>We Thanks To All Our Clients Who Reviewed NextGen Studio</h2> */}
        <h2>Our Valuable Clients</h2>
      </div>

      {/* Slider Container */}
      <div className="reviews-slider">
        <div
          className="reviews-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="review-slide">
              <div className="testimonial-card">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                  className="testimonial-image"
                />
                <p className="testimonial-review">"{testimonial.review}"</p>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="prev-btn" onClick={handlePrev}>
        &lt;
      </button>
      <button className="next-btn" onClick={handleNext}>
        &gt;
      </button>
    </section>
  );
};

export default Reviews;
