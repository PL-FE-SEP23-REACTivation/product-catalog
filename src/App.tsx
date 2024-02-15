import React from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

import Phones from './pages/Phones';

import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Pagination } from './components/Pagination';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Link to="/" />
      <Link to="/phones" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Pagination total={30} perPage={6} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
