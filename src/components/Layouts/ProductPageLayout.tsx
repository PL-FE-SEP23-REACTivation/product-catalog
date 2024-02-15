import React from 'react';
import './layouts.scss';
import { Outlet } from 'react-router';

const ProductPageLayout: React.FC = () => {
  return (
    <div className="product-page_layout_container">
      <Outlet />
    </div>
  );
};

export default ProductPageLayout;
