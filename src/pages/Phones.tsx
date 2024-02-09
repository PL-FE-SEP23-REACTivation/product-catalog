import React from 'react';
import '../styles/phonesPage.scss';
import { Link } from 'react-router-dom';
import homeIcon from '../icons/home.svg';
import rightArrowIcon from '../icons/right-arrow.svg';

const PhonesPage: React.FC = () => {
  const products = [
    {
      name: 'product1',
    },
    {
      name: 'product2',
    },
    {
      name: 'product3',
    },
    {
      name: 'product4',
    },
    {
      name: 'product1',
    },
    {
      name: 'product1',
    },
    {
      name: 'product1',
    },
    {
      name: 'product1',
    },
    {
      name: 'product2',
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
          <div className="phones_cards_item" key={product.name}>
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhonesPage;
