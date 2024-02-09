import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './Header.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo">
            <img className="header__logo__item" src={Logo} alt="logo" />
          </Link>

          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__list__item">
                <Link to="/" className="header__nav__list__item__link">
                  Home
                </Link>
              </li>
              <li className="header__nav__list__item">
                <Link to="/phones" className="header__nav__list__item__link">
                  Phones
                </Link>
              </li>
              <li className="header__nav__list__item">
                <Link to="/tablets" className="header__nav__list__item__link">
                  Tablets
                </Link>
              </li>
              <li className="header__nav__list__item">
                <Link
                  to="/accessories"
                  className="header__nav__list__item__link"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__buttons">
          <button type="button" className="header__buttons__like" />
          <button type="button" className="header__buttons__cart" />
        </div>
      </header>
      <div className="burger-menu-container">
        <BurgerMenu />
      </div>
    </>
  );
};
