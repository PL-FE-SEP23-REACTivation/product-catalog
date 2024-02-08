/* eslint-disable max-len */
import React from 'react';
import './PageNotFound.scss';

const PageNotFound: React.FC = () => {
  return (
    <div className="container">
      <div className="container__error">
        <h1 className="container__error-title"> 404 </h1>
        <p className="container__error-paragraph">
          Oops! The page you are looking for is not here.
        </p>
        <a className="container__error-link" href="#">
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
