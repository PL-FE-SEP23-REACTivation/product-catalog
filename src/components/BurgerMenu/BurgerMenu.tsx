import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './BurgerMenu.scss';
import { useFavoritesStore } from '../../storage/FavouritesStore';

export const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const favoriteProducts = useFavoritesStore((state) => state.favoriteProducts);

  useEffect(() => {
    if (isMenuOpen) {
      document.querySelector('body')?.classList.add('no-scroll');
    } else {
      document.querySelector('body')?.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="burger-menu">
      <header className="headerMobile" id="headerMobile">
        <div className="headerMobile_nav">
          <Link to="/" className="headerMobile_link headerMobile_link--logo">
            <p />
          </Link>
          <div className="headerMobile_buttons">
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
          </div>
        </div>
      </header>

      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="links menu_links">
          <NavLink
            to="/"
            className="menu_link burger_link"
            onClick={toggleMenu}
          >
            home
          </NavLink>
          <NavLink
            to="/phones"
            className="menu_link burger_link"
            onClick={toggleMenu}
          >
            PHONES
          </NavLink>
          <NavLink
            to="/tablets"
            className="menu_link burger_link"
            onClick={toggleMenu}
          >
            TABLETS
          </NavLink>
          <NavLink
            to="/accessories"
            className="menu_link burger_link"
            onClick={toggleMenu}
          >
            ACCESSORIES
          </NavLink>
        </div>
        <div className="menu_footer">
          <NavLink
            to="/favourites"
            className="menu_heart burger_link_bottom menu_footer_buttons"
            onClick={toggleMenu}
          >
            <button type="button" className="menu_heart">
              {favoriteProducts.length > 0 && (
                <span className="menu_heart-counter">
                  {favoriteProducts.length}
                </span>
              )}
            </button>
          </NavLink>
          <NavLink
            to="/cart"
            className="menu_bag burger_link_bottom"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </div>
  );
};
