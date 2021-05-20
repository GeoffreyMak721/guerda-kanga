import React from "react";

export default function PracticeArea() {
  return (
    <section id="practice" className="practice_area gray-bg pt-120 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section_title pb-20">
              <h3 className="title">Domaines d' intervantion</h3>
              <p>Notre champ d'action est trés large</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="single_practice mt-30 d-sm-flex">
              <div className="practice_icon">
                <i className="lni lni-briefcase"></i>
              </div>
              <div className="practice_content media-body">
                <h4 className="practice_title">
                  <a href="#">Divorce, Séparation, Rupture PACS</a>
                </h4>
                <p>
                  Nous vous conseillons et vous assistons dans toutes les
                  procédures de divorce amiables ou contentieuses.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single_practice mt-30 d-sm-flex">
              <div className="practice_icon">
                <i className="lni lni-graduation"></i>
              </div>
              <div className="practice_content media-body">
                <h4 className="practice_title">
                  <a href="#">Enfants, Pensions alimentaires</a>
                </h4>
                <p>
                  Dans le cadre de la séparation des parents (divorce, rupture
                  de PACS ou de concubinage), il est nécessaire d’organiser les
                  modalités relatives aux enfants.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single_practice mt-30 d-sm-flex">
              <div className="practice_icon">
                <i className="lni lni-consulting"></i>
              </div>
              <div className="practice_content media-body">
                <h4 className="practice_title">
                  <a href="#">Filiation, Adoption</a>
                </h4>
                <p>
                  Différentes actions judiciaires relatives à la filiation sont
                  envisageables.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single_practice mt-30 d-sm-flex">
              <div className="practice_icon">
                <i className="lni lni-network"></i>
              </div>
              <div className="practice_content media-body">
                <h4 className="practice_title">
                  <a href="#">Protection des mineurs et des majeurs</a>
                </h4>
                <p>
                  Dans certains cas, il faut protéger un majeur afin d’éviter
                  que certaines personnes abusent de sa vulnérabilité ou de sa
                  faiblesse due à l’âge ou à la maladie.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single_practice mt-30 d-sm-flex">
              <div className="practice_icon">
                <i className="lni lni-money-location"></i>
              </div>
              <div className="practice_content media-body">
                <h4 className="practice_title">
                  <a href="#">Régimes matrimoniaux, Successions</a>
                </h4>
                <p>
                  Il n’est pas toujours simple de choisir son régime matrimonial
                  ni de savoir ce que ce choix implique comme conséquences
                  durant le mariage.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single_practice mt-30 d-sm-flex">
              <div className="practice_icon">
                <i className="lni lni-target"></i>
              </div>
              <div className="practice_content media-body">
                <h4 className="practice_title">
                  <a href="#">PACS</a>
                </h4>
                <p>
                  Nous pouvons nous charger de la rédaction de votre pacte civil
                  de solidarité (PACS) qui est un contrat qui permet d’organiser
                  la vie commune sans pour autant se marier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
