import React from 'react';
import './Footer.scss';
export const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={process.env.PUBLIC_URL + '/img/Logo.svg'} alt="logo" />
      </div>
      <div className="footer__links">
        <a href="#github" className="footer__links-link">
          github
        </a>
        <a href="#contacts" className="footer__links-link">
          contacts
        </a>
        <a href="#rights" className="footer__links-link">
          rights
        </a>
      </div>
      <div className="footer__return">
        <button onClick={handleClick} className="footer__return-content">
          <p className="footer__return-content-text">Back to top</p>
          <div className="footer__return-content-button" />
        </button>
      </div>
    </footer>
  );
};
