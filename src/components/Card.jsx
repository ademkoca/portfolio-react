import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from './modals/Modal';
import axios from 'axios';
import moment from 'moment/moment';
const Card = ({ project }) => {
  const [languages, setLanguages] = useState({});
  const [total, setTotal] = useState(0);
  const [date, setDate] = useState('');
  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  useEffect(() => {
    const getLanguages = async () => {
      await axios
        .get(
          `https://api.github.com/repos/ademkoca/${project.GitHubRepoName}/languages`
        )
        .then((response) => {
          setLanguages(response.data);
          // console.log(languages);
          setTotal(Object.values(languages).reduce((a, b) => a + b));
          //   sumValues(languages);
          console.log(Object.values(languages).reduce((a, b) => a + b));
        });
    };
    getLanguages();
  }, []);

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
  }, []);

  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(false);
  };
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
          {/* {project.desc} */}
          {parse(project.desc)}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target={`#staticBackdrop${project.id}`}
                onClick={() => setShowModal(true)}
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
              {moment(date).fromNow()}
            </small>
          </div>
          <div className="progress mt-3" id={project.name}>
            {Object.entries(languages).map(([key, value]) => (
              <div
                key={key}
                className={`progress-bar bg-gray-${Math.floor(
                  Math.random() * (9 - 6) + 6
                )}00`}
                role="progressbar"
                style={{ width: `${(100 * value) / total}%` }}
                // aria-valuenow={`${(100 * value) / total}`}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {key}
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal && <Modal project={project} onClose={onClose} />}
    </div>
  );
};

export default Card;
