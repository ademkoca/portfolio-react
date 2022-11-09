import React from 'react';

const Tech = () => {
  return (
    <section className="container">
      <div className="display-4 fw-light text-center my-5">Tools I use</div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h5 className="text-center">Frontend</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">HTML5</li>
            <li className="list-group-item">CSS3/SASS/SCSS</li>
            <li className="list-group-item">Bootstrap 5</li>
            <li className="list-group-item">Tailwind CSS</li>
            <li className="list-group-item">Material UI</li>
            <li className="list-group-item">React.js</li>
            <li className="list-group-item">Next.js</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h5 className="text-center">Backend</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">PHP</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">.NET</li>
            <li className="list-group-item">Sanity</li>
            <li className="list-group-item">MongoDB</li>
            <li className="list-group-item">MySQL</li>
            <li className="list-group-item">SQL Server</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h5 className="text-center">Design tools</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Adobe XD</li>
            <li className="list-group-item">Adobe Photoshop</li>
            <li className="list-group-item">Figma</li>
            <li className="list-group-item">Canva</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tech;
