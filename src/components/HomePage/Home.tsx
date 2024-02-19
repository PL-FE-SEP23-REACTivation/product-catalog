import React from 'react';
import Carousel from './Carousel/Carousel';
import NewProducts from './NewProducts/NewProducts';
import Categories from './Categories/Categories';
import HotPrices from './HotPrices/HotPrices';

import './Home.scss';

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <div className="title">
        <h1>Welcome to Nice Gadgets store!</h1>
      </div>
      <div className="carousel">
        <Carousel />
      </div>

      <div className="newProducts">
        <NewProducts />
      </div>
      <div className="category">
        <Categories />
      </div>
      <div className="hotPrices">
        <HotPrices />
      </div>
    </div>
  );
};

export default HomePage;
