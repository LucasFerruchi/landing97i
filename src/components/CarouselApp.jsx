import React from "react";
import "../css/carousel.css";
import image1 from "../assets/img/02.jpg";
import image2 from "../assets/img/03.jpg";

const CarouselApp = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        // -------------------------
        data-bs-ride="carousel"
      >
        <div className="carousel-inner container-carousel">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="imagen 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="imagen 2" />
          </div>
          <div className="overlay">
            <div className="h-100 d-flex flex-column align-items-center justify-content-center text-white p-3">
              <h3 className="text-center">
                97i, conoce al Robots que hará tu vida mas fácil!
              </h3>
              <button className="btn btn-outline-light btn-lg">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselApp;
