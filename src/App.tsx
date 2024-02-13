import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Phones from './pages/Phones';

import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Pagination } from './components/Pagination';
import PageNotFound from './pages/PageNotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/phones">Phones</Link>

      <Routes>
        <Route path="/phones" element={<Phones />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Pagination total={30} perPage={6} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
