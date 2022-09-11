import React from 'react';

const Card = ({ project }) => {
  //   console.log('#staticBackdrop' + project.id);
  return (
    <div className="col">
      <div className="card shadow-sm">
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target={`#staticBackdrop${project.id}`}
        >
          <img
            src={`img/${project.mainImg}`}
            className="featurette-image img-fluid mx-auto"
            alt={`${project.mainImgAlt}`}
            width="500"
            height="500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </a>
        <div className="card-body">
          <h2 className="mb-4 display-6">{project.title}</h2>
          {project.desc}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target={`#staticBackdrop${project.id}`}
              >
                Preview
              </button>
              <a href={project.URL} target="_blank">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Visit site
                </button>
              </a>
            </div>
            <small className="text-muted" id={project.date}>
              9 mins
            </small>
          </div>
          <div className="progress mt-3" id={project.name}>
            <div
              className="progress-bar bg-gray-700"
              role="progressbar"
              style={{ width: '20%' }}
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              CSS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
