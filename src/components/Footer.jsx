import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-muted py-5">
      <div className="container">
        <p className="float-end mb-1">
          <a id="backToTop" href="#">
            Back to top
          </a>
        </p>
        <p className="mb-1">&copy; {year} Adem Koca</p>
      </div>
    </footer>
  );
};

export default Footer;
