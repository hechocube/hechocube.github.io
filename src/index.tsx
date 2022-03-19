import React from "react";
import ReactDOM from "react-dom";
// Vendor CSS Files
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
// Template Main CSS Files
import "./assets/css/style.css";
// Vendo JS Files
import "./assets/vendor/purecounter/purecounter.js";
import "./assets/vendor/aos/aos.js";
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/glightbox/js/glightbox.min.js";
import "./assets/vendor/isotope-layout/isotope.pkgd.min.js";
import "./assets/vendor/swiper/swiper-bundle.min.js";
import "./assets/vendor/php-email-form/validate.js";
// Template Main JS File
import "./assets/js/main.js";
// Components
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>,
  document.getElementById("root")
);
