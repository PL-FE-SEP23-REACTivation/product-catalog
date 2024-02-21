import React, { useEffect, useState } from 'react';
import Carousel from './Carousel/Carousel';
import NewProducts from './NewProducts/NewProducts';
import Categories from './Categories/Categories';
import HotPrices from './HotPrices/HotPrices';
import { Product } from '../../types/productType';
import './Home.scss';
import { getHotProducts, getNewProducts } from '../../api/products';

const HomePage: React.FC = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [hotProducts, setHotProducts] = useState<Product[]>([]);
  const [newProductsLoading, setNewProductsLoading] = useState(true);
  const [hotProductsLoading, setHotProductsLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setNewProductsLoading(true);
    getNewProducts()
      .then((data) => setNewProducts(data))
      .catch((e) => console.log(e))
      .finally(() => setNewProductsLoading(false));
  }, []);

  useEffect(() => {
    setHotProductsLoading(true);
    getHotProducts()
      .then((data) => setHotProducts(data))
      .catch((e) => console.log(e))
      .finally(() => setHotProductsLoading(false));
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
          products={newProducts}
          isLoading={newProductsLoading}
          isError={isError}
          title="Brand New Models"
        />
      </div>
      <div className="category">
        <Categories />
      </div>
      <div className="hotPrices">
        <HotPrices
          products={hotProducts}
          isLoading={hotProductsLoading}
          isError={isError}
          title="Hot Prices"
        />
      </div>
    </div>
  );
};

export default HomePage;
