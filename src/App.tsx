import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Phones from './pages/Phones';
import { Cart } from './components/Cart/Cart';
import ProductPageLayout from './components/Layouts/ProductPageLayout';
import PageNotFound from './pages/PageNotFound';
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
          <Route path="/phones" element={<Phones />} />
          <Route element={<ProductPageLayout />}>
            <Route path="/:category/:id" element={<Productpage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/cart">
            <Route index element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
