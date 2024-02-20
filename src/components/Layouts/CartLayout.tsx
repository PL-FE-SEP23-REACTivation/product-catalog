import React from 'react';
import { Outlet } from 'react-router-dom';
import './layouts.scss';

export const CartLayout: React.FC = () => {
  return (
    <div className="layout_cart_container">
      <Outlet />
    </div>
  );
};
