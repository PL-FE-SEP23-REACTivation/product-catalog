import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { useThemeStore } from '../../storage/ThemeStore';

export const Footer: React.FC = () => {
  const { darkMode } = useThemeStore();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      {darkMode ? (
        <div className="footer__logo">
          <img
            src={process.env.PUBLIC_URL + '/icons/Logo-white.svg'}
            alt="logo"
          />
        </div>
      ) : (
        <div className="footer__logo">
          <img src={process.env.PUBLIC_URL + '/icons/Logo.svg'} alt="logo" />
        </div>
      )}
      <div className="footer__links">
        <Link
          to="https://github.com/PL-FE-SEP23-REACTivation"
          className="footer__links-link"
          target="blank"
        >
          github
        </Link>
        <Link to="#contacts" className="footer__links-link">
          contacts
        </Link>
        <Link to="#rights" className="footer__links-link">
          rights
        </Link>
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
