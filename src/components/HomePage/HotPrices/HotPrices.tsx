import React from 'react';
import './HotPrices.scss';
import { ProductCard } from '../../ProductCard/ProductCard';

const HotPrices: React.FC = () => {
  //demo data
  const product = {
    id: 1,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: '4.7\' IPS',
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
  };

  return (
    <>
      <h2>Hot prices</h2>
      <ProductCard product={product} />
    </>
  );
};

export default HotPrices;
