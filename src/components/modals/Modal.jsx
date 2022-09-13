import React, { useEffect, useState } from 'react';

const Modal = ({ project, handleClose }) => {
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    for (let i = 0; i < project.modalImg.length; i++) {
      setButtons((prev) => [...prev, i]);
    }
  }, []);

  return (
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
            <h5 className="modal-title" id={`staticBackdrop${project.id}Label`}>
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
                {buttons.map((b, idx) => (
                  <button
                    key={idx}
                    type="button"
                    data-bs-target={`#carouselExampleCaptions${project.id}`}
                    data-bs-slide-to={`${b}`}
                    className="active"
                    aria-current="true"
                    aria-label={`Slide ${b + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {project.modalImg.map((img, idx) => (
                  <div
                    className={`carousel-item ${idx === 0 ? 'active' : ''}`}
                    key={idx}
                  >
                    <img
                      src={`img/${img}`}
                      className="d-block w-100"
                      alt={project.modalImgAlt[idx]}
                    />
                  </div>
                ))}
              </div>
              {project.modalImg.length > 1 && (
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carouselExampleCaptions${project.id}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
              )}
              {project.modalImg.length > 1 && (
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#carouselExampleCaptions${project.id}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <a href={project.URL} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-primary btn-modal">
                Visit site
              </button>
            </a>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
