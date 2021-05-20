import React from "react";

export default function AboutArea() {
  return (
    <section id="about" className="about_area">
      <div className="about_law_area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="about_law_title mt-30">
                <h4 className="title">Something About Law Firm</h4>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about_law_content mt-30">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  dianonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolo.
                </p>
                <a href="#" className="main-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_hire_area pt-80 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_image mt-50">
                <img src="images/about.jpg" alt="about" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content mt-50">
                <div className="section_title">
                  <h3 className="title">Faites nous confiance</h3>
                  <p>
                    Nous sommes fiers que notre cabinet d'avocats offre des
                    services juridiques de premier ordre à un prix abordable à
                    l'échelle nationale! Avec nous, vous n'aurez jamais
                    l'impression que les avocats ne sont que des voleurs en
                    procès, en plus, nous gagnons 98% de tous les cas. Alors
                    avec nous, vos chances de gagner sont aussi élevées que
                    possible!
                  </p>
                </div>
                <ul className="about_list">
                  <li className="d-flex">
                    <div className="about_check">
                      <i className="lni lni-checkmark-circle"></i>
                    </div>
                    <div className="about_list_content media-body">
                      <h5 className="title">Notre spécialité : La Famille</h5>
                      <p>
                        Notre cabinet est exclusivement dédié au droit de la
                        famille que nous pratiquons au quotidien. Cela nous
                        permet de vous conseiller au mieux dans les
                        problématiques familiales que vous rencontrez.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="about_check">
                      <i className="lni lni-checkmark-circle"></i>
                    </div>
                    <div className="about_list_content media-body">
                      <h5 className="title">
                        Résoudre durablement votre problématiques
                      </h5>
                      <p>
                        Il est important pour nous de tout mettre en œuvre pour
                        vous aider à trouver des solutions pérennes et d’éviter,
                        dans la mesure du possible, des conflits récurrents,
                        usants et coûteux.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="about_check">
                      <i className="lni lni-checkmark-circle"></i>
                    </div>
                    <div className="about_list_content media-body">
                      <h5 className="title">
                        Des compétence au service de votre dossier
                      </h5>
                      <p>
                        Nous travaillons en équipe pour vous accompagner au
                        mieux tout au long de votre dossier. Nous gagnons ainsi
                        en disponibilité, réactivité et compétence.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
