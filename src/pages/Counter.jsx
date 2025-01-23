import React, { useEffect } from "react";

const Counter = () => {
  useEffect(() => {
    // Function to animate counters
    const animateCounters = () => {
      const counters = document.querySelectorAll(".purecounter");
      counters.forEach((counter) => {
        const updateCounter = () => {
          const target = +counter.getAttribute("data-purecounter-end");
          const duration = +counter.getAttribute("data-purecounter-duration") * 1000; // Convert to milliseconds
          const start = +counter.getAttribute("data-purecounter-start") || 0;
          const increment = Math.ceil((target - start) / (duration / 50)); // Adjust increment speed
          let current = start;

          const incrementCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = current;
              setTimeout(incrementCounter, 50);
            } else {
              counter.textContent = target; // Ensure it ends exactly at the target
            }
          };

          incrementCounter();
        };

        updateCounter();
      });
    };

    animateCounters();
  }, []);

  return (
    <section id="stats" className="stats section dark-background">
      <img src="assets/img/stats-bg.jpg" alt="" data-aos="fade-in" />

      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="subheading">
          <h3>What we have achieved so far</h3>
          <p>
            Iusto et labore modi qui sapiente expedita tempora et aut non ipsum
            consequatur illo.
          </p>
        </div>

        <div className="row gy-4">
          {[
            { end: 232, label: "Clients" },
            { end: 521, label: "Projects" },
            { end: 1453, label: "Hours Of Support" },
            { end: 32, label: "Workers" },
          ].map((stat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end={stat.end}
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  0
                </span>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
