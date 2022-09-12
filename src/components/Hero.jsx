import React from 'react';
import '../style.css';

const Hero = () => {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1">HI!</h1>
          <p className="lead">
            My name is Adem. I'm a front-end web developer.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a href="#myWork" className="btn btn-primary my-2 bg-btn">
              See my work
            </a>
            <a
              href="mailto:aademkocaa@gmail.com?subject=Job request - YOUR NAME"
              className="btn btn-outline-secondary my-2"
            >
              Hire me
            </a>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3"
            src="img/crowdfund/desktop.png"
            alt="Social media dashboard screenshot"
            width="720"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
