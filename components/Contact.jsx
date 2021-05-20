import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact_area pt-80 pb-130 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact_content mt-40">
              <div className="section_title pb-25">
                <h3 className="title">Vous pouvez prendre contact</h3>
                <p>
                  Nous somme la à votre écoute vous pouvez nous laisser vos
                  preoccupations.
                </p>
              </div>
              <div className="contact_info">
                <h5 className="info_title">Appelez-Nous 24/7</h5>
                <p className="number">+243 82 335 872 1</p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact_form pt-20">
              <form id="contact-form" action="contact.php">
                <div className="row">
                  <div className="col-md-6">
                    <div className="single_form">
                      <input name="name" type="text" placeholder="Nom" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single_form">
                      <input name="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single_form">
                      <input
                        name="practice"
                        type="text"
                        placeholder="Domaine d' intervation"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single_form">
                      <textarea id="message" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <p className="form-message"></p>
                  <div className="col-md-12">
                    <div className="single_form text-right">
                      <button className="main-btn">Envoyer</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
