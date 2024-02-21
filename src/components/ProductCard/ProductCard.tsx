import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/productType';
import { useFavoritesStore } from '../../storage/FavouritesStore';
import './ProductCard.scss';
import IMGofHeart from './RedHeart.png';
import IMGofWhiteHeart from './WhiteHeart.png';
import { useTContext } from '../../store/cartStore';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { id, itemId, name, fullPrice, price, screen, capacity, ram, image } =
    product;
  const isProductDiscount = fullPrice !== price;
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const isFavoriteProduct = useFavoritesStore((state) =>
    state.favoriteProducts.some((p) => p.id === id)
  );
  const { cart, setCart } = useTContext();

  useEffect(() => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    setIsAddedToCart(!!alreadyInCart);
  }, [cart, product.id]);

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const alreadyInCart = prevCart.find((item) => item.id === product.id);
      if (!alreadyInCart) {
        return [...prevCart, { ...product, quantity: 1 }];
      }
      return prevCart;
    });
  };

  const toggleFavorite = () => {
    if (isFavoriteProduct) {
      useFavoritesStore.getState().removeFromFavorites(id);
    } else {
      useFavoritesStore.getState().addToFavorites(product);
    }
  };

  return (
    <div className="card">
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
        <button className="card__button-favorite" onClick={toggleFavorite}>
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
