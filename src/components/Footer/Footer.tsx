import React from 'react';
import logo from '../../public/img/Logo.svg';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className='footer__logo'>
        <img src={logo} alt="dsd" />
      </div>
      <div className="footer__links">
        <a href="#github" className="footer__links-link">github</a>
        <a href="#contacts" className="footer__links-link">contacts</a>
        <a href="#rights" className="footer__links-link">rights</a>
      </div>
      <div className="footer__return">
        Back to top
        <a href='#top' className='footer__return-button'>
          {/* <img src={vector} className='footer__return-vector' alt="" /> */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
