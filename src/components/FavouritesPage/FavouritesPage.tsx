/* eslint-disable max-len */
import React from 'react';
import homeIcon from '../../icons/home.svg';
import rightArrowIcon from '../../icons/right-arrow.svg';
import './FavouritesPage.scss';
import { ProductCard } from '../ProductCard/ProductCard';

const FavouritesPage: React.FC = () => {
  const products = [
    {
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
    },
    {
      id: 2,
      category: 'phones',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple-iphone-7-32gb-black',
      fullPrice: 540,
      price: 500,
      screen: '5.5\' IPS',
      capacity: '32GB',
      color: 'black',
      ram: '3GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7-plus/black/00.webp',
    },
    {
      id: 3,
      category: 'phones',
      itemId: 'apple-iphone-8-64gb-gold',
      name: 'Apple iPhone 8 64GB Gold',
      fullPrice: 600,
      price: 550,
      screen: '4.7\' IPS',
      capacity: '64GB',
      color: 'gold',
      ram: '2GB',
      year: 2017,
      image: 'img/phones/apple-iphone-8/gold/00.webp',
    },
    {
      id: 4,
      category: 'phones',
      itemId: 'apple-iphone-11-64gb-black',
      name: 'Apple iPhone 11 64GB Black',
      fullPrice: 932,
      price: 880,
      screen: '6.1\' IPS',
      capacity: '64GB',
      color: 'black',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11/black/00.webp',
    },
    {
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
    },
    {
      id: 2,
      category: 'phones',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple-iphone-7-32gb-black',
      fullPrice: 540,
      price: 500,
      screen: '5.5\' IPS',
      capacity: '32GB',
      color: 'black',
      ram: '3GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7-plus/black/00.webp',
    },
    {
      id: 3,
      category: 'phones',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 8 64GB Gold',
      fullPrice: 600,
      price: 550,
      screen: '4.7\' IPS',
      capacity: '64GB',
      color: 'gold',
      ram: '2GB',
      year: 2017,
      image: 'img/phones/apple-iphone-8/gold/00.webp',
    },
    {
      id: 4,
      category: 'phones',
      itemId: 'apple-iphone-11-64gb-black',
      name: 'Apple iPhone 11 64GB Black',
      fullPrice: 932,
      price: 880,
      screen: '6.1\' IPS',
      capacity: '64GB',
      color: 'black',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11/black/00.webp',
    },
  ];
  return (
    <div className="favourites">
      <div className="favourites__header">
        <img className="favourites__header-icon" src={homeIcon} alt="home" />
        <img
          className="favourites__header-icon"
          src={rightArrowIcon}
          alt="arrow"
        />
        <div className="favourites__header-category">Favourites</div>
      </div>
      <div className="favourites__title">
        Favourites
        <div className="favourites__title-count">5 items</div>
      </div>
      <div className="favourites__content">
        {products.map((product) => (
          <div className="favourites__content-items" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
