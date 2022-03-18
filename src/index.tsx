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
// Components
import Navbar from "./components/navbar/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById("root")
);
