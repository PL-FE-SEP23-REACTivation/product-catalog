/* eslint-disable max-len */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './layouts.scss';
import { useThemeStore } from '../../storage/ThemeStore';

const AppLayout: React.FC = () => {
  const { darkMode } = useThemeStore();
  return (
    <div className={`app__layout ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <BurgerMenu />
      <div className={`app__layout-children ${darkMode ? 'dark-mode' : ''}`}>
        <Outlet />
      </div>
      <div className={`app__layout-footer ${darkMode ? 'dark-mode' : ''}`}>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
