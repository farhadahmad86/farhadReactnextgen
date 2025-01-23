import React, { useRef, useState, useEffect } from "react";
import "./css/tw.css"; // Update with your actual CSS path

const TrustedCompanies = () => {
  const carouselRef = useRef(null);
  const stateRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleMouseDown = (e) => {
      const state = stateRef.current;
      state.isDown = true;
      state.startX = e.pageX - carousel.offsetLeft;
      state.scrollLeft = carousel.scrollLeft;
    };

    const handleMouseLeave = () => {
      stateRef.current.isDown = false;
    };

    const handleMouseUp = () => {
      stateRef.current.isDown = false;
    };

    const handleMouseMove = (e) => {
      const state = stateRef.current;
      if (!state.isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - state.startX) * 2; // Adjust speed of dragging
      carousel.scrollLeft = state.scrollLeft - walk;
    };

    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mouseleave", handleMouseLeave);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mousemove", handleMouseMove);

    return () => {
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
      carousel.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="trusted-companies"
      className="trusted-companies section"
      style={{ backgroundColor: "#EF4141" }}
    >
      <div className="row align-items-center mx-5">
        <div className="col-lg-4">
          <div className="container">
            <h2 style={{ color: "white" }}>
              Trusted by{" "}
              <span style={{ display: "block", fontWeight: 700 }}>
                Top Companies.
              </span>
            </h2>
          </div>
        </div>
        <div className="col-lg-8">
          <div
            ref={carouselRef}
            className="carousel carousel-dark slide custom-carousel"
            data-bs-ride="carousel"
            data-bs-interval={isHovered ? false : 2000} // Disable autoplay when hovered
            data-bs-pause="hover" // Pause on hover
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="carousel-inner">
              {/* Section 1 */}
              <div className="carousel-item active" data-bs-interval="2000">
                <div className="row">
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 1"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 2"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 3"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 4"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 5"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="carousel-item" data-bs-interval="2000">
                <div className="row">
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 6"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 7"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 8"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 9"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 10"
                    />
                  </div>
                </div>
              </div>
 {/* Section 2 */}
 <div className="carousel-item" data-bs-interval="2000">
                <div className="row">
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 6"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 7"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 8"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 9"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="assets/img/logo.webp"
                      className="d-block w-100"
                      alt="Company 10"
                    />
                  </div>
                </div>
              </div>
              {/* Add additional sections as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
