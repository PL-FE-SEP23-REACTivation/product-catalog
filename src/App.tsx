/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavouritesPage from './components/FavouritesPage/FavouritesPage';
import AppLayout from './components/Layouts/AppLayout';
import { CartLayout } from './components/Layouts/CartLayout';
import { CatalogLayout } from './components/Layouts/CatalogLayout';
import { FavouritesPageLayout } from './components/Layouts/FavouritesPageLayout';
import ProductPageLayout from './components/Layouts/ProductPageLayout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CartPage from './pages/CartPage';
import Catalog from './pages/Catalog';
import HomePage from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Productpage from './pages/ProductPage';
import { CartProvider } from './store/cartStore';
import './styles/_reset.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route element={<CatalogLayout />}>
              <Route path="/:category" element={<Catalog />} />
            </Route>
            <Route element={<ProductPageLayout />}>
              <Route path="/:category/:id" element={<Productpage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route element={<CartLayout />}>
              <Route path="/cart" element={<CartPage />} />
            </Route>
            <Route element={<FavouritesPageLayout />}>
              <Route path="/favourites" element={<FavouritesPage />} />
            </Route>
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
