import React from 'react';
import { projects } from '../data';
import Card from './Card';

const MyWork = () => {
  return (
    <div className="album py-5 bg-light" id="myWork">
      <div className="container">
        <div className="display-4 fw-light text-center mb-5">My work</div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 g-3">
          {/*<!-- Crowdfund -->*/}
          {projects.map((p) => (
            <Card project={p} key={p.id} />
          ))}
          {/*<!-- /Crowdfund -->*/}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
