/* eslint-disable global-require */

import React from 'react';
import { useCartStore } from '../../storage/CartStore';
import { Product } from '../../types/productType';
import './CartItem.scss';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  price: number;
  image: string;
  product: Product;
  quantity: number;
};

export const CartItem: React.FC<Props> = ({ product, quantity }) => {
  const { cart, setCart, removeFromCart } = useCartStore.getState();
  const publicUrl = process.env.PUBLIC_URL;
  const handleIncrease = () => {
    const updatedCart = cart.map((p) => {
      if (p.product?.id === product.id) {
        return {
          ...p,
          quantity: quantity + 1,
        };
      }
      return p;
    });

    setCart([...updatedCart]);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const updatedCart = cart.map((p) => {
        if (p.product?.id === product.id) {
          return {
            ...p,
            quantity: quantity - 1,
          };
        }

        return p;
      });

      setCart([...updatedCart]);
    } else {
      const updatedCart = cart.filter((p) => p.product?.id !== product.id);
      setCart([...updatedCart]);
    }
  };

  const increaseQuantity = () => {
    handleIncrease();
  };

  const removeItemFromCart = () => {
    removeFromCart(product.id);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      handleDecrease();
    }
  };

  return (
    <>
      <div className="cartItem">
        <div className="cartItem__info">
          <div className="cartItem__info-wrapper">
            <button
              type="button"
              onClick={removeItemFromCart}
              className="cartItem__info__close"
            />
            <Link to={`/${product.category}/${product.itemId}`}>
              <img
                src={`${publicUrl}/${product?.image}`}
                alt={product?.name}
                className="cartItem__info__img"
              />
            </Link>
          </div>
          <Link to={`/${product.category}/${product.itemId}`}>
            <h2 className="cartItem__info__name">{product?.name}</h2>
          </Link>
        </div>

        <div className="cartItem__calc">
          <div className="cartItem__calc__quantity">
            <button
              type="button"
              onClick={decreaseQuantity}
              className={`cartItem__calc__quantity__button ${
                quantity === 1 ? 'inactive' : ''
              }`}
            >
              -
            </button>
            <p className="cartItem__calc__quantity__number">{quantity}</p>
            <button
              type="button"
              onClick={increaseQuantity}
              className="cartItem__calc__quantity__button"
            >
              +
            </button>
          </div>

          <p className="cartItem__calc__price">{product?.price * quantity}$</p>
        </div>
      </div>
    </>
  );
};
