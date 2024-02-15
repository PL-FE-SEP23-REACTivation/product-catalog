import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../icons/home.svg';
import rightArrowIcon from '../../icons/right-arrow.svg';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from '../ProductCard/ProductCard';
import './PagePhones.scss';

const PagePhones: React.FC = () => {
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
    <div className="phones">
      <div className="icons">
        <div className="icons_icon">
          <Link to="/">
            <img src={homeIcon} alt="home" />
          </Link>
        </div>
        <div className="icons_icon">
          <img src={rightArrowIcon} alt="arrow" />
        </div>
        <div className="icons_text">
          <div>Phones</div>
        </div>
      </div>
      <h1 className="phones_title">Mobile phones</h1>
      <div className="phones_count">{`${products.length} models`}</div>
      <div className="phones_cards">
        {products.map((product) => (
          <div className="phones_cards_item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="phones_pagination_container">
        <Pagination total={30} perPage={6} />
      </div>
    </div>
  );
};

export default PagePhones;
