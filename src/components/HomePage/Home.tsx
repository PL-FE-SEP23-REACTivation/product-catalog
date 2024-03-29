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
import { useThemeStore } from '../../storage/ThemeStore';

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
  const [isNewError, setIsNewError] = useState(false);
  const [isHotError, setIsHotError] = useState(false);
  const { darkMode } = useThemeStore();

  useEffect(() => {
    setNewProductsLoading(true);
    getNewProducts()
      .then((data) => setNewProducts(data))
      .catch((e) => {
        console.log(e);
        setIsNewError(true);
      })
      .finally(() => setNewProductsLoading(false));
  }, []);

  useEffect(() => {
    setHotProductsLoading(true);
    getHotProducts()
      .then((data) => setHotProducts(data))
      .catch((e) => {
        console.log(e);
        setIsHotError(true);
      })
      .finally(() => setHotProductsLoading(false));
  }, []);

  return (
    <div className={`homePage ${darkMode ? 'dark-mode' : 'light-mode'}`}>
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
          isError={isNewError}
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
          isError={isHotError}
          title="Hot Prices"
        />
      </section>
    </div>
  );
};

export default HomePage;
