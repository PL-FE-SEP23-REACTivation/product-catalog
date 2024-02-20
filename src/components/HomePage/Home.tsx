import React, { useEffect, useState } from 'react';
import Carousel from './Carousel/Carousel';
import NewProducts from './NewProducts/NewProducts';
import Categories from './Categories/Categories';
import HotPrices from './HotPrices/HotPrices';
import { Product } from '../../types/productType';
import './Home.scss';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('https://reactivation.onrender.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="homePage">
      <div className="title">
        <h1>Welcome to Nice Gadgets store!</h1>
      </div>
      <div className="carousel">
        <Carousel />
      </div>

      <div className="newProducts">
        <NewProducts
          products={products}
          isLoading={isLoading}
          isError={isError}
          title="Brand New Models"
        />
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
