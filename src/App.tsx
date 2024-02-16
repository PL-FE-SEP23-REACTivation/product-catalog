import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/_reset.scss';

import { Cart } from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { CatalogLayout } from './components/Layouts/CatalogLayout';
import ProductPageLayout from './components/Layouts/ProductPageLayout';
import PageNotFound from './pages/PageNotFound';
import Phones from './pages/Phones';
import Productpage from './pages/ProductPage';
import './styles/_reset.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
