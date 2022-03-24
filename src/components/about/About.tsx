import React from "react";
import styled from "styled-components";

function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3>Who We Are</h3>
              <styledH2>
                Developers and designers that craft quality and awesome
                IT-related services across various platforms to our clients’
                budget with our Filipino engineer’s various skillsets – web and
                mobile development, UI/UX design, graphic design, image and
                video editing, website maintenance.
              </styledH2>
            </div>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src="assets/img/about_us.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

const styledH2 = styled.h2`
  text-align: justify;
`;
