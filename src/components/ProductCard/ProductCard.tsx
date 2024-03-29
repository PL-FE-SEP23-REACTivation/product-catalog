/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../storage/CartStore';
import { useFavoritesStore } from '../../storage/FavouritesStore';
import { Product } from '../../types/productType';
import './ProductCard.scss';
import { useThemeStore } from '../../storage/ThemeStore';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { id, itemId, name, fullPrice, price, screen, capacity, ram, image } =
    product;
  const isProductDiscount = fullPrice !== price;
  const { darkMode } = useThemeStore();
  const heartEmptyPath = process.env.PUBLIC_URL + '/icons/heartEmpty.svg';
  const heartEmptyWhitePath =
    process.env.PUBLIC_URL + '/icons/heartEmptyWhite.svg';
  const heartFilledPath = process.env.PUBLIC_URL + '/icons/heartFilled.svg';
  const isAddedToCart = useCartStore((state) =>
    state.cart.some((p) => p.product?.id === id)
  );
  const isFavoriteProduct = useFavoritesStore((state) =>
    state.favoriteProducts.some((p) => p.id === id)
  );

  const handleAddToCart = () => {
    if (!isAddedToCart) {
      useCartStore.getState().addToCart(product);
    }
  };

  const toggleFavorite = () => {
    if (isFavoriteProduct) {
      useFavoritesStore.getState().removeFromFavorites(id);
    } else {
      useFavoritesStore.getState().addToFavorites(product);
    }
  };

  return (
    <div className={`card ${darkMode ? 'dark-mode' : ''}`}>
      <div className="card__imgContainer">
        <Link to={`/${product.category}/${itemId}`}>
          <img src={`${process.env.PUBLIC_URL}/${image}`} alt={`${name}`} />
        </Link>
      </div>
      <Link to={`/${product.category}/${itemId}`}>
        <div className="card__text">
          <p className="card__title">{name}</p>
        </div>
      </Link>
      <div className="card__price">
        {isProductDiscount ? (
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
          className={`card__button-favorite ${isFavoriteProduct ? 'dark-fav' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavoriteProduct ? (
            <img src={heartFilledPath} alt="IMG of heart" />
          ) : (
            <img
              src={darkMode ? heartEmptyWhitePath : heartEmptyPath}
              alt="IMG of heart"
            />
          )}
        </button>
      </div>
    </div>
  );
};
