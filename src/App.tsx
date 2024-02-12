import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import { Header } from './components/Header/Header';
import './styles/_reset.scss';
import { CatalogLayout } from './components/Layouts/CatalogLayout';
import Footer from './components/Footer/Footer';
import PagePhones from './components/PagePhones/PagePhones';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<CatalogLayout />}>
          <Route path="/phones" element={<PagePhones />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
