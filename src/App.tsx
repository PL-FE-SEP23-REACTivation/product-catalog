import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Phones from './pages/Phones';
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
              <Route path="/phones" element={<Phones />} />
            </Route>
            <Route element={<ProductPageLayout />}>
              <Route path="/phones/:id" element={<Productpage />} />
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
