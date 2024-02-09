import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhonesPage from './pages/Phones';
import PageNotFound from './pages/PageNotFound';
import { Header } from './components/Header/Header';
import './styles/_reset.scss';
import { CatalogLayout } from './pages/CatalogLayout';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<CatalogLayout />}>
          <Route path="/phones" element={<PhonesPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
