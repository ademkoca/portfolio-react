import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About me</h4>
              <p className="text-muted">
                I was born in 1991, in Novi Pazar, Serbia. I graduated with a
                bachelors degree in Computer Science at the State University of
                Novi Pazar, where I currently live and work remotely full-time
                at a major software development company.
              </p>
              <p className="text-muted">
                I am married to my beautiful wife, Semra. I like to take long
                walks in my free time, trying to balance my sedentary job and a
                healthy lifestyle.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    rel="noreferrer"
                    href="https://twitter.com/rahatlook"
                    target="_blank"
                    className="text-white"
                  >
                    Follow on Twitter
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/ademkoca/"
                    target="_blank"
                    className="text-white"
                  >
                    Connect on LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.github.com/ademkoca/"
                    target="_blank"
                    className="text-white"
                  >
                    My GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:aademkocaa@gmail.com?subject=Job request - YOUR NAME"
                    className="text-white"
                  >
                    Email me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a
            href="/"
            rel="noreferrer"
            className="navbar-brand d-flex align-items-center"
          >
            <img
              className="me-2"
              src="img/logo-invert.png"
              alt="Main logo"
              id="main-logo"
            />
            <strong>Adem Koca</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
