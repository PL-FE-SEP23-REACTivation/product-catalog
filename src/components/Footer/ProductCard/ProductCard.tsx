import React from 'react';
import image1 from './00.webp';
import IMGofHeart from './RedHeart.png';
import IMGofWhiteHeart from './WhiteHeart.png';
import { Product } from '../../../types/protuctType';
import './ProductCard.scss';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    itemId,
    name,
    fullPrice,
    price,
    // id, category, color, year, image,  <- not used in the creation process
    screen,
    capacity,
    ram,
  } = product;

  // demo data
  const card = ['apple-iphone-7-32gb-black', 'apple-iphone-7-64gb-black'];

  const favorite = ['apple-iphone-7-32gb-black', 'apple-iphone-7-64gb-black'];

  const isProductDiscount = fullPrice === price;

  const isAddedToCard = card.includes(itemId);

  const isFavoriteProduct = favorite.includes(itemId);
  // end of demo data

  return (
    <div className="card">
      <div className="card__imgContainer">
        <img src={image1} alt="img of phone" />
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
        {!isAddedToCard ? (
          <button className="card__button-add">Add to cart</button>
        ) : (
          <button className="card__button-added">Added</button>
        )}
        <button className="card__button-favorite">
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
