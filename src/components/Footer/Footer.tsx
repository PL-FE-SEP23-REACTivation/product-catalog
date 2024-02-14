import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
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
        Back to top
        <a href="#top" className="footer__return-button"></a>
      </div>
    </footer>
  );
};

export default Footer;
