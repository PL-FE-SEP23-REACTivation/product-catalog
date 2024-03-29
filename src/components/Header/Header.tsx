/* eslint-disable max-len */
import { Link, NavLink } from 'react-router-dom';
import { useCartStore } from '../../storage/CartStore';
import { useFavoritesStore } from '../../storage/FavouritesStore';
import './Header.scss';
import { useThemeStore } from '../../storage/ThemeStore';
import { UserPanel } from '../UserPanel/UserPanel';
import { useState } from 'react';

export const Header = () => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isThemeAnimating, setIsThemeAnimating] = useState(false);
  const { darkMode, toggleDarkMode } = useThemeStore();
  const cartItemsCount = useCartStore((state) =>
    state.cart.reduce((total, item) => total + (item.quantity ?? 0), 0)
  );
  const favoriteProducts = useFavoritesStore((state) => state.favoriteProducts);

  const handleThemeAnimation = () => {
    setIsThemeAnimating(true);
    setTimeout(() => setIsThemeAnimating(false), 700);
  };

  const handleClose = () => {
    setIsUserOpen(false);
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header__container">
        {darkMode ? (
          <Link to="/" className="header__logo">
            <img
              src={process.env.PUBLIC_URL + '/icons/Logo-white.svg'}
              alt="logo"
            />
          </Link>
        ) : (
          <Link to="/" className="header__logo">
            <img src={process.env.PUBLIC_URL + '/icons/Logo.svg'} alt="logo" />
          </Link>
        )}

        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__list__item">
              <NavLink
                to="/"
                className="header__nav__list__item__link header__link"
              >
                Home
              </NavLink>
            </li>
            <li className="header__nav__list__item">
              <NavLink
                to="/phones"
                className="header__nav__list__item__link header__link"
              >
                Phones
              </NavLink>
            </li>
            <li className="header__nav__list__item">
              <NavLink
                to="/tablets"
                className="header__nav__list__item__link header__link"
              >
                Tablets
              </NavLink>
            </li>
            <li className="header__nav__list__item">
              <NavLink
                to="/accessories"
                className="header__nav__list__item__link header__link"
              >
                Accessories
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__buttons">
        <div
          className="header__buttons__theme header__link"
          onClick={toggleDarkMode}
        >
          <div
            className={`theme-icon ${isThemeAnimating ? 'animate-theme' : ''}`}
            onClick={handleThemeAnimation}
          ></div>
        </div>
        <div
          className="header__buttons__register header__link"
          onClick={() => setIsUserOpen(true)}
        ></div>
        <NavLink
          to="/favourites"
          className="header__buttons__like header__link"
        >
          {favoriteProducts.length > 0 && (
            <div className="header__buttons__notification">
              {favoriteProducts.length}
            </div>
          )}
        </NavLink>
        <NavLink to="/cart" className="header__buttons__cart header__link">
          {cartItemsCount > 0 && (
            <div className="header__buttons__notification">
              {cartItemsCount}
            </div>
          )}
        </NavLink>
      </div>
      {isUserOpen && <UserPanel onClose={handleClose} />}
    </header>
  );
};
