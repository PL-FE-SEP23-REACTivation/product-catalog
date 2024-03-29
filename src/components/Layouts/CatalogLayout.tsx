import React from 'react';
import { Outlet } from 'react-router-dom';
import './layouts.scss';

export const CatalogLayout: React.FC = () => {
  return (
    <div className="layout_catalog_container">
      <Outlet />
    </div>
  );
};
