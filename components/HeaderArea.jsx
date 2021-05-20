import React from "react";
import Link from "next/link";

export default function HeaderArea({ headerTop = true }) {
  return (
    <header className="header_area">
      {!!headerTop && (
        <div className="header_top">
          <div className="container">
            <div className="header_top_content d-md-flex justify-content-between">
              <div className="header_info text-center">
                <ul>
                  <li>
                    <i className="lni lni-mobile"></i>{" "}
                    <a href="#"> +800-9233-3213</a>
                  </li>
                  <li>
                    <i className="lni lni-envelope"></i>
                    <a href="#"> hello@yourlawfirm.com</a>
                  </li>
                </ul>
              </div>
              <div className="header_social d-none d-md-block">
                <ul>
                  <li>
                    <a href="#">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-instagram-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="header_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src="/images/logo.png" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link href="/#home">
                        <a className="page-scroll">Accueil</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#practice">
                        <a className="page-scroll">Domaines</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#team">
                        <a className="page-scroll">Equipes</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#testimonial">
                        <a className="page-scroll">Temoignages</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#blog">
                        <a className="page-scroll">Blog</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#contact">
                        <a className="page-scroll">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="navbar-btn d-none d-sm-inline-block">
                  <Link href="/#contact">
                    <a className="main-btn" data-scroll-nav="0">
                      Consultation
                    </a>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
