import React, { useEffect, useState } from 'react';
import { getHotProducts, getNewProducts } from '../../api/products';
import { Product } from '../../types/productType';
import Carousel from './Carousel/Carousel';
import image3 from './Carousel/banner-accessories.png';
import image2 from './Carousel/banner-phones.png';
import image1 from './Carousel/banner-tablets.png';
import Categories from './Categories/Categories';
import './Home.scss';
import HotPrices from './HotPrices/HotPrices';
import NewProducts from './NewProducts/NewProducts';

const HomePage: React.FC = () => {
  const slides = [
    { url: image1, title: 'tablets' },
    { url: image2, title: 'phones' },
    { url: image3, title: 'accessories' },
  ];

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
      <section className="homePage__title">
        <h1>Welcome to Nice Gadgets store!</h1>
      </section>
      <section className="homePage__section homePage__carousel">
        <Carousel slides={slides} />
      </section>

      <section className="homePage__section homePage__slider">
        <NewProducts
          products={newProducts}
          isLoading={newProductsLoading}
          isError={isError}
          title="Brand New Models"
        />
      </section>
      <section className="homePage__section homePage__category">
        <Categories />
      </section>
      <section className="homePage__section homePage__slider">
        <HotPrices
          products={hotProducts}
          isLoading={hotProductsLoading}
          isError={isError}
          title="Hot Prices"
        />
      </section>
    </div>
  );
};

export default HomePage;
