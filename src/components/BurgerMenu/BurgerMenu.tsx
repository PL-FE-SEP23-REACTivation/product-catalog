import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './BurgerMenu.scss';

export const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
            className="menu_heart burger_link_bottom"
            onClick={toggleMenu}
          />
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
