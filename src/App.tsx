/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Phones from './pages/Phones';
import { Cart } from './components/Cart/Cart';
import ProductPageLayout from './components/Layouts/ProductPageLayout';
import PageNotFound from './pages/PageNotFound';
import Productpage from './pages/ProductPage';
import './styles/_reset.scss';
import AppLayout from './components/Layouts/AppLayout';
import { FavouritesPageLayout } from './components/Layouts/FavouritesPageLayout';
import FavouritesPage from './components/FavouritesPage/FavouritesPage';
import { CatalogLayout } from './components/Layouts/CatalogLayout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<CatalogLayout />}>
            <Route path="/phones" element={<Phones />} />
          </Route>
          <Route element={<ProductPageLayout />}>
            <Route path="/phones/:id" element={<Productpage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/cart">
            <Route index element={<Cart />} />
          </Route>
          <Route element={<FavouritesPageLayout />}>
            <Route path="/favourites" element={<FavouritesPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
