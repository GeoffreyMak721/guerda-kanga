import React from "react";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="testimonial_area bg_cover pt-120 pb-130"
      style={{ backgroundImage: "url(images/testimonial.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section_title section_title_2 text-center pb-30">
              <h3 className="title">Nos client nous aimes</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="testimonial_active">
              <div className="single_testimonial pt-30 text-center">
                <div className="testimonial_image">
                  <img src="images/author-1.jpg" alt="author" />
                  <div className="quota">
                    <i className="lni lni-quotation"></i>
                  </div>
                </div>
                <div className="testimonial_content">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    dianonumy eirmod tempor invidunt ut labore et dolore magna
                    Lorem ipsum dolor sit ametc onsetetur sadipscing elitr, sed
                    dianonumy eirmod tempor invidunt.
                  </p>

                  <h5 className="author_name">Rob Hope</h5>
                  <span>Business Owner</span>
                </div>
              </div>
              <div className="single_testimonial pt-30 text-center">
                <div className="testimonial_image">
                  <img src="images/author-2.jpg" alt="author" />
                  <div className="quota">
                    <i className="lni lni-quotation"></i>
                  </div>
                </div>
                <div className="testimonial_content">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    dianonumy eirmod tempor invidunt ut labore et dolore magna
                    Lorem ipsum dolor sit ametc onsetetur sadipscing elitr, sed
                    dianonumy eirmod tempor invidunt.
                  </p>

                  <h5 className="author_name">Sarah Doe</h5>
                  <span>Artist</span>
                </div>
              </div>
              <div className="single_testimonial pt-30 text-center">
                <div className="testimonial_image">
                  <img src="images/author-3.jpg" alt="author" />
                  <div className="quota">
                    <i className="lni lni-quotation"></i>
                  </div>
                </div>
                <div className="testimonial_content">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    dianonumy eirmod tempor invidunt ut labore et dolore magna
                    Lorem ipsum dolor sit ametc onsetetur sadipscing elitr, sed
                    dianonumy eirmod tempor invidunt.
                  </p>

                  <h5 className="author_name">Michel Jordan</h5>
                  <span>Scientist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
