import React, { useEffect, useState } from 'react';

const Modal = ({ project, onClose }) => {
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    for (let i = 0; i < project.modalImg.length; i++) {
      setButtons((prev) => [...prev, i]);
      // console.log(buttons);
    }
  }, []);

  return (
    <div>
      {/*<!--Modal 9--> */}
      <div
        className="modal fade"
        id={`staticBackdrop${project.id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={`staticBackdrop${project.id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id={`staticBackdrop${project.id}Label`}
              >
                {project.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                id={`carouselExampleCaptions${project.id}`}
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  {buttons.map((b) => (
                    <button
                      type="button"
                      data-bs-target={`#carouselExampleCaptions${project.id}`}
                      data-bs-slide-to={`${b}`}
                      className="active"
                      aria-current="true"
                      aria-label={`Slide ${b + 1}`}
                    ></button>
                  ))}

                  {/* <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions9"
                    data-bs-slide-to="0"
                    className={`${i===0?"active": ""}`}
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button> */}
                  {/* <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions9"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button> */}
                  {/* <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions9"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button> */}
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="img/crowdfund/desktop.png"
                      className="d-block w-100"
                      alt="Crowdfund product page desktop screenshot"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="img/crowdfund/tablet.png"
                      className="d-block w-100"
                      alt="Crowdfund product page tablet screenshot"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="img/crowdfund/mobile.png"
                      className="d-block w-100"
                      alt="Crowdfund product page mobile screenshot"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions9"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions9"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <a href="https://ademkoca.github.io/crowdfund" target="_blank">
                <button type="button" className="btn btn-primary">
                  Visit site
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              {/*<!-- <button type="button" className="btn btn-primary">Understood</button> -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--/Modal 9--> */}
    </div>
  );
};

export default Modal;
