import React from "react";
import img from "./../../assets/img/remote.png";

function Remote() {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>THE BEST REMOTE TALENT</p>
        </header>

        <div className="row">
          <div className="col-lg-6">
            <img src={img} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div className="row align-self-center gy-4">
              <div
                className="col-md-6"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Quality Code</h3>
                </div>
              </div>

              <div
                className="col-md-6"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Excellent Communication</h3>
                </div>
              </div>

              <div
                className="col-md-6"
                data-aos="zoom-out"
                data-aos-delay="400"
              >
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>On Time and On Task</h3>
                </div>
              </div>

              <div
                className="col-md-6"
                data-aos="zoom-out"
                data-aos-delay="500"
              >
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Proactive</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- / row --> */}
      </div>
    </section>
  );
}

export default Remote;
