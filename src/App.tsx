import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Cart } from './components/Cart/Cart';
import AppLayout from './components/Layouts/AppLayout';
import { CartLayout } from './components/Layouts/CartLayout';
import { CatalogLayout } from './components/Layouts/CatalogLayout';
import ProductPageLayout from './components/Layouts/ProductPageLayout';
import PageNotFound from './pages/PageNotFound';
import Phones from './pages/Phones';
import Productpage from './pages/ProductPage';
import './styles/_reset.scss';
import AppLayout from './components/Layouts/AppLayout';
import HomePage from './pages/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route element={<CatalogLayout />}>
            <Route path="/phones" element={<Phones />} />
          </Route>
          <Route element={<ProductPageLayout />}>
            <Route path="/phones/:id" element={<Productpage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route element={<CartLayout />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
