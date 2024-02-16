import React, { useState } from 'react';
import './BurgerMenu.scss';
import { Link } from 'react-router-dom';
import { useFavoritesStore } from '../../storage/FavouritesStore';

export const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const favoriteProducts = useFavoritesStore((state) => state.favoriteProducts);

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
          <Link to="/favourites" className="menu_footer_buttons">
            <button type="button" className="menu_heart">
              <span className="menu_heart-counter">
                {favoriteProducts.length}
              </span>
            </button>
          </Link>
          <Link to="/cart" className="menu_footer_buttons">
            <button type="button" className="menu_bag">
              <span className="menu_bag-counter">0</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
