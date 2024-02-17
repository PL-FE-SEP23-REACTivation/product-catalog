import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import './styles/_reset.scss';
import ProductPageLayout from './components/Layouts/ProductPageLayout';
import AppLayout from './components/Layouts/AppLayout';
import { CartLayout } from './components/Layouts/CartLayout';
import { CatalogLayout } from './components/Layouts/CatalogLayout';
import PageNotFound from './pages/PageNotFound';
import Productpage from './pages/ProductPage';
import './styles/_reset.scss';
import { CartProvider } from './store/cartStore';
import CartPage from './pages/CartPage';
import HomePage from './pages/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route element={<CatalogLayout />}>
              <Route path="/:catalog" element={<Catalog />} />
            </Route>
            <Route element={<ProductPageLayout />}>
              <Route path="/:category/:id" element={<Productpage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route element={<CartLayout />}>
              <Route path="/cart" element={<CartPage />} />
            </Route>
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
