import React from "react";

export default function HeaderSlider() {
  return (
    <div id="home" className="header_slider slider-active">
      <div
        className="single_slider bg_cover d-flex align-items-center"
        style={{ backgroundImage: "url(images/slider-1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="slider_content">
                <h2
                  className="slider_title"
                  data-animation="fadeInUp"
                  data-delay="0.2s"
                >
                  Nous prenons soin de vous et nous savons vous défendre dans le
                  domaine juridique !
                </h2>
                <p data-animation="fadeInUp" data-delay="0.7s"></p>
                <a
                  href="#"
                  className="main-btn"
                  data-animation="fadeInUp"
                  data-delay="1.1s"
                >
                  Apprendre encore plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="single_slider bg_cover d-flex align-items-center"
        style={{ backgroundImage: "url(images/slider-2.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="slider_content">
                <h2
                  className="slider_title"
                  data-animation="fadeInUp"
                  data-delay="0.2s"
                >
                  Un accompagnement juridique personnalisé.
                </h2>
                <p data-animation="fadeInUp" data-delay="0.7s"></p>
                <a
                  href="#"
                  className="main-btn"
                  data-animation="fadeInUp"
                  data-delay="1.1s"
                >
                  Apprendre encore plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="single_slider bg_cover d-flex align-items-center"
        style={{ backgroundImage: "url(images/slider-3.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="slider_content">
                <h2
                  className="slider_title"
                  data-animation="fadeInUp"
                  data-delay="0.2s"
                >
                  Privilégier la négociation Pour parvenir à des accords sur
                  mesure.
                </h2>
                <p data-animation="fadeInUp" data-delay="0.7s"></p>
                <a
                  href="#"
                  className="main-btn"
                  data-animation="fadeInUp"
                  data-delay="1.1s"
                >
                  Apprendre encore plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
