import React from "react";

export default function HeaderSlider() {
  return (
    <div id="blog-home" className="header_slider slider-active">
      <div
        className="single_slider blog bg_cover d-flex align-items-center"
        style={{ backgroundImage: "url(/images/slider-1.jpg)" }}
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
                  Notre Blog
                </h2>
                <p data-animation="fadeInUp" data-delay="0.7s">
                  Des temps en temps nous publions une chronique sur un thème
                  relatif au droit, qui peut vous intéresser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
