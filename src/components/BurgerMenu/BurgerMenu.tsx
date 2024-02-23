/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCartStore } from '../../storage/CartStore';
import { useFavoritesStore } from '../../storage/FavouritesStore';
import './BurgerMenu.scss';
import { useThemeStore } from '../../storage/ThemeStore';
import ToggleButton from '../Toggle/Toggle';

export const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const favoriteProducts = useFavoritesStore((state) => state.favoriteProducts);
  const { cart } = useCartStore.getState();
  const { darkMode } = useThemeStore();
  const className = 'burger_link_bottom menu_footer_buttons toggler_bottom';

  const cartItemsCount = cart.reduce(
    (total, item) => total + (item.quantity ?? 0),
    0
  );

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
    <div className={`burger-menu ${darkMode ? 'dark-mode' : 'light-mode'}`}>
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
          <NavLink
            to="/register"
            className="menu_link burger_link"
            onClick={toggleMenu}
          >
            ACCOUNT
          </NavLink>
        </div>
        <div className="menu_footer">
          <ToggleButton className={className} />
          <NavLink
            to="/favourites"
            className="burger_link_bottom menu_footer_buttons"
            onClick={toggleMenu}
          >
            <div className="menu_heart">
              {favoriteProducts.length > 0 && (
                <span className="menu-counter">{favoriteProducts.length}</span>
              )}
            </div>
          </NavLink>
          <NavLink
            to="/cart"
            className="burger_link_bottom menu_footer_buttons"
            onClick={toggleMenu}
          >
            <div className="menu_bag">
              {cartItemsCount > 0 && (
                <span className="menu-counter">{cartItemsCount}</span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
