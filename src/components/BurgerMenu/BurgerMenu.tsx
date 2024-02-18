import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" className="menu_link" onClick={toggleMenu}>
            home
          </Link>
          <Link to="/phones" className="menu_link" onClick={toggleMenu}>
            PHONES
          </Link>
          <Link to="/tablets" className="menu_link" onClick={toggleMenu}>
            TABLETS
          </Link>
          <Link to="/accessories" className="menu_link" onClick={toggleMenu}>
            ACCESSORIES
          </Link>
        </div>
        <div className="menu_footer">
          <Link to="/favourites" className="menu_heart" onClick={toggleMenu} />
          <Link to="/cart" className="menu_bag" onClick={toggleMenu} />
        </div>
      </div>
    </div>
  );
};
