import React from 'react';
import { Outlet } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './layouts.scss';

const AppLayout: React.FC = () => {
  return (
    <div className="app__layout">
      <Header />
      <BurgerMenu />
      <div className="app__layout-children">
        <Outlet />
      </div>
      <div className="app__layout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
