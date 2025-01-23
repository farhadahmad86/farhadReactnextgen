import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
// import Contact from './Contact';
import PageTitle from "./PageTitle";
import Contact from "../components/Contact";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const reviews = [
    {
      id: 1,
      content:
        "We appreciate the work that has been done for us by NextGen Studio. They have shown things at their best level. Their guidance, service, feedback, response and traffic at our presentations and our recently designed booth at a conference held currently were extremely positive.",
      name: "Andrew Randazzo",
      role: "CEO @ Prime Medical Training",
      stars: 5,
      image: "assets/img/testimonials/test-1.webp", // Replace with actual image path
    },
    {
      id: 2,
      content:
        "Working with NextGen Studio has been an absolute pleasure. Personable, professional and easy to contact with last minute adjustments. Having done an excellent job on building our dynamic website we had no hesitation in contacting NextGen Studio again for a second website build project.",
      name: "John Mitton",
      role: "Art Director @ Skybluetheatre",
      stars: 5,
      image: "assets/img/testimonials/test-2.webp", // Replace with actual image path
    },
    {
      id: 3,
      content:
        "We are delighted with our website. It was a pleasure to work with these guys who worked tirelessly with us to achieve the look and level of detail required. Good communicators and great at keeping the momentum going.",
      name: "Jo Radcliffe",
      role: "Co-founder & Director @ 404team",
      stars: 5,
      image: "assets/img/testimonials/test-3.webp", // Replace with actual image path
    },
    {
      id: 4,
      content:
        " NextGen Studio completed work with a lot of examples and great proposals. I am really happy with the result and can only recommend to hire him and his great expertise! Thank you!",
      name: "Markus Fet",
      // role: "Art Director @ Skybluetheatre",
      stars: 5,
      image: "assets/img/testimonials/test-4.webp", // Replace with actual image path
    },
    {
      id: 5,
      content:
        "I have done more than 10 projects with  NextGen Studio and this was the fastest turn around I have had so far. They managed to get my logo 100% as I requested on first draft. These guys know what they are doing. Would recommend to anyone. A*",
      name: "John bob",
      // role: "Art Director @ Skybluetheatre",
      stars: 5,
      image: "assets/img/testimonials/test-5.webp", // Replace with actual image path
    },
    {
      id: 6,
      content:
        "They were professional in design and did a good job. Their lack of knowledge of Arabic (right-to-left language) made one item a bit tough - but this was understandable. In the English and design work done they were excellent.",
      name: "Ameshref",
      // role: "Art Director @ Skybluetheatre",
      stars: 5,
      image: "assets/img/testimonials/test-6.webp", // Replace with actual image path
    },
    {
      id: 7,
      content:
        " NextGen Studio has been doing an amazing job! It took us some time to define exactly what we want together but this is because he is very professional and wants to make sure the projects given to him would fully satisfy the customer when deliver. We have been very demanding in terms of updates in the design and he has always stayed very polite, comprehensive and doing his best to help us. I would definitely hire him again and you should too! :)",
      name: "jordanvan",
      // role: "Art Director @ Skybluetheatre",
      stars: 5,
      image: "assets/img/testimonials/test-7.webp", // Replace with actual image path
    },
    {
      id: 8,
      content:
        " NextGen Studio has such a phenomenal team and they are 100% customer focused. I found them through reading reviews about them and yes all the reviews are correct, they have truly mastered the art of making the customer happy. I will definitely be using them again for future projects. It's rare to find customer focused service providers such as these, in the world that we live in. I hope they will keep this up and satisfy all their clients this way.",
      name: "Moses",
      // role: "Art Director @ Skybluetheatre",
      stars: 5,
      image: "assets/img/testimonials/test-8.webp", // Replace with actual image path
    },
    {
      id: 9,
      content:
        " NextGen Studio was very accommodating with every request we had. Although we provided the design, he not only made it look great, but added an extra features which made it look even better.",
      name: "Noushki",
      // role: "Art Director @ Skybluetheatre",
      stars: 5,
      image: "assets/img/testimonials/test-9.webp", // Replace with actual image path
    },

    // Add more reviews as needed.
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi ${i < count ? "bi-star-fill" : "bi-star"}`}
          style={{
            color: i < count ? "#ffc107" : "#e4e5e9",
            marginRight: "2px",
          }}
        ></i>
      );
    }
    return stars;
  };

  return (
    <>
      <PageTitle
        title="Reviews"
        backgroundImage="assets/img/LandingPages/reviews.webp"
        subtitle="Reviews"
        id="pad1"
      />
      <section id="reviews" className="reviews section">
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ width: "80%" }}
        >
          <h2>Customer Reviews</h2>
          <p>We Thanks To All Our Clients Who Reviewed NextGen Studio</p>
        </div>

        <div className="container" style={{ width: "80%" }}>
          <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
            {reviews.map((review) => (
              <div key={review.id} className="col-lg-4 col-md-6">
                <div className="review-card">
                  <div
                    className="review-image"
                    style={{ textAlign: "center", marginBottom: "15px" }}
                  >
                    <img
                      src={review.image}
                      alt={review.name}
                      style={{
                        borderRadius: "50%",
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="review-content">
                    <p style={{ fontSize: "16px", fontStyle: "italic" }}>
                      &ldquo;{review.content}&rdquo;
                    </p>
                    <p style={{ fontWeight: "bold", margin: "10px 0 5px" }}>
                      {review.name}
                    </p>
                    <p style={{ color: "#6c757d", fontSize: "14px" }}>
                      {review.role}
                    </p>
                    <div className="review-stars" style={{ marginTop: "10px" }}>
                      {renderStars(review.stars)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
