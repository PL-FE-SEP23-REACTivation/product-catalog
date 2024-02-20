import React from 'react';
import { Outlet } from 'react-router-dom';
import './layouts.scss';

export const FavouritesPageLayout: React.FC = () => {
  return (
    <div className="layout__favourites">
      <Outlet />
    </div>
  );
};
