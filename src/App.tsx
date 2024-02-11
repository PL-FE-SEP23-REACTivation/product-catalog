import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Phones from './pages/Phones';

import PageNotFound from './pages/PageNotFound';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/phones" element={<Phones />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
