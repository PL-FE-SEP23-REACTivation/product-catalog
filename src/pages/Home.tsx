import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import NewProducts from '../components/NewProducts/NewProducts';
import Category from '../components/Category/Category';
import HotPrices from '../components/HotPrices/HotPrices';

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
        <Category />
      </div>
      <div className="hotPrices">
        <HotPrices />
      </div>
    </div>
  );
};

export default HomePage;
