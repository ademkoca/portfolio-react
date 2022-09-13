import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from './modals/Modal';
import axios from 'axios';
import moment from 'moment/moment';
// import { compileString } from 'sass';
const Card = ({ project }) => {
  const [languages, setLanguages] = useState({
    HTML: 2,
    CSS: 3,
    JavaScript: 1,
  });
  const [total, setTotal] = useState(0);
  const [date, setDate] = useState('');
  useEffect(() => {
    const getLanguages = async () => {
      await axios
        .get(
          `https://api.github.com/repos/ademkoca/${project.GitHubRepoName}/languages`
        )
        .then((response) => {
          setLanguages(response.data);
          // console.log(languages);
          setTotal(
            Object.values(languages).reduce((a, b) => {
              return a + b;
            }, 0)
          );
          // console.log(total);
          //   sumValues(languages);
          //   console.log(Object.values(languages).reduce((a, b) => a + b));
        });
    };
    getLanguages();
  }, [total]);

  useEffect(() => {
    const getDate = async () => {
      await axios
        .get(
          `https://api.github.com/repos/ademkoca/${project.GitHubRepoName}/commits`
        )
        // .then((response) => response.json())
        .then((response) => {
          // console.log(data[0].commit.author.date);
          setDate(response.data[0].commit.author.date);
          //   console.log(date);
        });
    };
    getDate();
  }, [date]);

  const [showModal, setShowModal] = useState(true);
  // console.log(showModal);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => {
    setShowModal(true);
  };
  //   console.log('#staticBackdrop' + project.id);
  return (
    <div className="col">
      {showModal && (
        <Modal key={project.id} project={project} handleClose={handleClose} />
      )}
      <div className="card shadow-sm">
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target={`#staticBackdrop${project.id}`}
          onClick={() => handleShow}
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
          {/* {project.desc} */}
          {parse(project.desc)}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                onClick={() => handleShow}
                type="button"
                className="btn btn-sm btn-outline-primary rounded-1"
                data-bs-toggle="modal"
                data-bs-target={`#staticBackdrop${project.id}`}
              >
                Preview
              </button>

              <a href={project.URL} target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Visit site
                </button>
              </a>
              <a
                href={`https://github.com/ademkoca/${project.GitHubRepoName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  GitHub
                </button>
              </a>
            </div>
            <small className="text-muted" id={project.GitHubRepoName}>
              {moment(date).fromNow()}
            </small>
          </div>
          <div className="progress mt-3" id={project.name}>
            {Object.entries(languages).map(([key, value]) => (
              <div
                key={key}
                className={`progress-bar bg-gray-${
                  key === 'JavaScript'
                    ? '9'
                    : key === 'HTML'
                    ? '8'
                    : key === 'CSS'
                    ? '7'
                    : '6'
                }00`}
                role="progressbar"
                style={{ width: `${(100 * value) / total}%` }}
                // aria-valuenow={`${(100 * value) / total}`}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {(100 * value) / total > 5
                  ? key
                  : key === 'JavaScript'
                  ? 'JS'
                  : key}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
