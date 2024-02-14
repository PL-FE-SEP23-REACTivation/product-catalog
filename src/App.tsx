import React from 'react';
import Phones from './pages/Phones';
import TestProductPage from './pages/TestProductPage';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import { Header } from './components/Header/Header';
import './styles/_reset.scss';
import { CatalogLayout } from './components/Layouts/CatalogLayout';
import Footer from './components/Footer/Footer';
import PagePhones from './components/PagePhones/PagePhones';
import { Cart } from './components/Cart/Cart';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:id" element={<TestProductPage />} />
        <Route element={<CatalogLayout />}>
          <Route path="/phones" element={<PagePhones />} />
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
