import React from 'react';
import './ProductCard.css';
import image1 from './00.jpg';

export const ProductCard: React.FC = () => {
  return (
    <div className="productCard">
      <div className="productCard__img-container">
        <img
          className="productCard__img"
          src={image1}
          alt="img of Apple iPhone Xs 64GB Silver (....)"
        />
      </div>
      <div className="productCard__title">
        Apple iPhone Xs 64GB Silver (....)
      </div>
      <div className="productCard__price">
        <div className="productCard__price-regular">799</div>
        <div className="productCard__price-discount">899</div>
      </div>
      <hr className="line" />
      <div className="productCard__properties">
        <div className="productCard__spec">
          <div className="productCard__spec-name">Screen</div>
          <div className="productCard__spec-value">5.8 OLED</div>
        </div>
        <div className="productCard__spec">
          <div className="productCard__spec-name">Capacity</div>
          <div className="productCard__spec-value">65 GB</div>
        </div>
        <div className="productCard__spec">
          <div className="productCard__spec-name">RAM</div>
          <div className="productCard__spec-value">4 GB</div>
        </div>
      </div>
      <div className="productCard__buttons">
        <button className="productCard__buttons-add">Add to cart</button>
        <button className="productCard__buttons-favorite">heart</button>
      </div>
    </div>
  );
};
