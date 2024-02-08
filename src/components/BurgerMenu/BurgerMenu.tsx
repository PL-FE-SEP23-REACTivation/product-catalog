import React, { useState } from 'react';
import './BurgerMenu.scss';

export const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="burger-menu">
      <header className="headerMobile" id="headerMobile">
        <div className="headerMobile_nav">
          <a
            href="index.html"
            className="headerMobile_link headerMobile_link--logo"
          >
            <p />
          </a>
          <div className="headerMobile_buttons">
            <a href="#nav" className="header_link">
              <button
                className={`burger-icon ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    toggleMenu();
                  }
                }}
                tabIndex={0}
                type="button"
              >
                <p />
              </button>
              <div className="header_burger" />
            </a>
          </div>
        </div>
      </header>

      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="links menu_links">
          <a href="http#" className="menu_link">
            home
          </a>
          <a href="http#" className="menu_link">
            PHONES
          </a>
          <a href="http#" className="menu_link">
            TABLETS
          </a>
          <a href="http#" className="menu_link">
            ACCESSORIES
          </a>
        </div>
        <div className="menu_footer">
          <a href="http#" className="menu_heart">
            <p />
          </a>
          <a href="http#" className="menu_bag">
            <p />
          </a>
        </div>
      </div>
    </div>
  );
};
