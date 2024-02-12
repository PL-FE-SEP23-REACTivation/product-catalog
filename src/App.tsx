import React from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Phones from './pages/Phones';
import PageNotFound from './pages/PageNotFound';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Cart } from './components/Cart/Cart';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/phones">Phones</Link>

      <Routes>
        <Route path="/phones" element={<Phones />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/cart">
          <Route index element={<Cart />} />
        </Route>
      </Routes>
      <Pagination total={30} perPage={6} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
