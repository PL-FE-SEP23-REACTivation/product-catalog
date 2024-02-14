import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Phones from './pages/Phones';
import './styles/_reset.scss';

import PageNotFound from './pages/PageNotFound';
import { Header } from './components/Header/Header';
import './styles/_reset.scss';
import { CatalogLayout } from './components/Layouts/CatalogLayout';
import Footer from './components/Footer/Footer';
import Productpage from './pages/ProductPage';
import ProductPageLayout from './components/Layouts/ProductPageLayout';
import { Cart } from './components/Cart/Cart';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/phones" element={<Phones />} />
        <Route element={<ProductPageLayout />}>
          <Route path="/phones/:id" element={<Productpage />} />

        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/cart">
          <Route index element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
