import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Phones from './pages/Phones';
import './styles/_reset.scss';

import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import ProductPageLayout from './components/Layouts/ProductPageLayout';
import { CartLayout } from './components/Layouts/CartLayout';
import PageNotFound from './pages/PageNotFound';
import Productpage from './pages/ProductPage';
import './styles/_reset.scss';
import { CartProvider } from './store/cartStore';
import CartPage from './pages/CartPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/phones" element={<Phones />} />
          <Route element={<ProductPageLayout />}>
            <Route path="/phones/:id" element={<Productpage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route element={<CartLayout />}>
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
