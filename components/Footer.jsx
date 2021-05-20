import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer_area">
      {/*  <div className="footer_subscribe pt-100 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="subscribe_title">
                <h4 className="title">Subscribe Our Newsletter</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe_form">
                <form action="#">
                  <input type="text" placeholder="hello@yourdomain.com" />
                  <button className="main-btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="footer_widget pt-15 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-7">
              <div className="footer_about mt-50">
                <a href="#">
                  <img src="/images/logo.png" alt="logo" />
                </a>
                <p>
                  Lorem ipsum dolor sit ametcons etur sadipscing elitr, sed
                  nonumy eirmod tempor invidunt ut labore dolore magna aliquyam
                  eirmod tempor invidunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-7">
              <div className="footer_wrapper d-flex flex-wrap">
                {/* <div className="footer_link mt-45">
                  <h5 className="footer_title">Resources</h5>
                  <ul className="link">
                    <li>
                      <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Cookie Policy</a>
                    </li>
                    <li>
                      <a href="#">Complaints Policy</a>
                    </li>
                  </ul>
                </div>
                 */}
                <div className="footer_link mt-45">
                  <h5 className="footer_title">Liens</h5>
                  <ul className="link">
                    <li>
                      <a href="#">Accueil</a>
                    </li>
                    <li>
                      <a href="#">Domaines</a>
                    </li>
                    <li>
                      <a href="#">Equipes</a>
                    </li>
                    <li>
                      <a href="#">BLog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5">
              <div className="footer_social mt-45">
                <h5 className="footer_title">Suivez-Nous</h5>
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="lni lni-facebook-filled"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-twitter-original"></i> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-linkedin-original"></i> Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_copyright">
        <div className="container">
          <div className="copyright">
            <p>
              © Copyright 2021 Tous droit reservé | Développé par{" "}
              <a href="https://uideck.com/" rel="nofollow">
                Mbok'art Concept
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
