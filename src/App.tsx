import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Phones from './pages/Phones';
import TestProductPage from './pages/TestProductPage';

import PageNotFound from './pages/PageNotFound';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/phones">Phones</Link>

      <Routes>
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:id" element={<TestProductPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
