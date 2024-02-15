import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './layouts.scss';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
  return (
    <div className="app__layout">
      <Header />
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
