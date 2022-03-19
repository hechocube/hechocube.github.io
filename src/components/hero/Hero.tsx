import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center vh-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">GROW YOUR DEV TEAM</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              WITH THE RIGHT REMOTE TALENT
            </h2>
            <p
              className="text-primary"
              style={{ color: "#4154f1 !important" }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Fast • Simple • Affordable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
