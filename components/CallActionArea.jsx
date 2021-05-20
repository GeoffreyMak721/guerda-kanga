import React from "react";

export default function CallActionArea() {
  return (
    <section
      className="call_action_area pt-115 pb-130 bg_cover"
      style={{ backgroundImage: "url(images/call_action.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="call_action_content text-center">
              <h3 className="action_title">
                <span>25</span> Years Of Experience In Various Cases
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                dianonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.Stet clita kasd gubergren.
              </p>
              <a href="#" className="main-btn">
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
