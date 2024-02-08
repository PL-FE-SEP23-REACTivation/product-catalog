import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Phones from './pages/Phones';
import { Header } from './components/Header/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/phones">Phones</Link>

      <Routes>
        <Route path="/phones" element={<Phones />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
