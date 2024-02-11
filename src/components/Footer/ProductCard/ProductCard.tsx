import React, { useState } from 'react';
import IMGofHeart from './RedHeart.png';
import IMGofWhiteHeart from './WhiteHeart.png';
import { Product } from '../../../types/productType';
import './ProductCard.scss';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, itemId, fullPrice, price, screen, capacity, ram, color } =
    product;

  const isProductDiscount = fullPrice !== price;

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavoriteProduct, setIsFavoriteProduct] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
  };

  const handleToggleFavorite = () => {
    setIsFavoriteProduct((prevState) => !prevState);
  };

  const imagePath = `img/phones/${itemId}/${color}/00.webp`;

  return (
    <div className="card">
      <div className="card__imgContainer">
        <img src={require(`../../../public/${imagePath}`)} alt={`${name}`} />
      </div>
      <div className="card__title">{name}</div>
      <div className="card__price">
        {!isProductDiscount ? (
          <>
            <div className="card__price-regular">{price}</div>
            <div className="card__price-discount">{fullPrice}</div>
          </>
        ) : (
          <div className="card__price-regular">{price}</div>
        )}
      </div>
      <hr className="card__line" />
      <div className="card__properties">
        <div className="card__properties__spec">
          <div className="card__properties__spec-name">Screen</div>
          <div className="card__properties__spec-value">{screen}</div>
        </div>
        <div className="card__properties__spec">
          <div className="card__properties__spec-name">Capacity</div>
          <div className="card__properties__spec-value">{capacity}</div>
        </div>
        <div className="card__properties__spec">
          <div className="card__properties__spec-name">RAM</div>
          <div className="card__properties__spec-value">{ram}</div>
        </div>
      </div>
      <div className="card__button">
        {!isAddedToCart ? (
          <button className="card__button-add" onClick={handleAddToCart}>
            Add to cart
          </button>
        ) : (
          <button className="card__button-added">Added</button>
        )}
        <button
          className="card__button-favorite"
          onClick={handleToggleFavorite}
        >
          {isFavoriteProduct ? (
            <img src={IMGofHeart} alt="IMG of heart" />
          ) : (
            <img src={IMGofWhiteHeart} alt="IMG of heart" />
          )}
        </button>
      </div>
    </div>
  );
};
