import React from 'react';
import Carousel from './Carousel/Carousel';
import NewProducts from './NewProducts/NewProducts';
import Categories from './Categories/Categories';
import HotPrices from './HotPrices/HotPrices';
import image1 from './Carousel/banner-tablets.png';
import image2 from './Carousel/banner-phones.png';
import image3 from './Carousel/banner-accessories.png';

import './Home.scss';

const HomePage: React.FC = () => {
  const slides = [
    { url: image1, title: 'tablets' },
    { url: image2, title: 'phones' },
    { url: image3, title: 'accessories' },
  ];
  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  };
  return (
    <div className="homePage">
      <div className="title">
        <h1>Welcome to Nice Gadgets store!</h1>
      </div>
      <div className="carousel" style={containerStyles}>
        <Carousel slides={slides} />
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
