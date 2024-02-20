/* eslint-disable global-require */

import React from 'react';
import { useTContext } from '../../store/cartStore';
import { Product } from '../../types/productType';
import './CartItem.scss';

type Props = {
  name: string;
  price: number;
  image: string;
  product: Product;
  quantity: number;
};

export const CartItem: React.FC<Props> = ({ product, quantity }) => {
  const { cart, setCart } = useTContext();
  const publicUrl = process.env.PUBLIC_URL;
  const handleIncrease = () => {
    const updatedCart = cart.map((p) => {
      if (p.id === product.id) {
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
        if (p.id === product.id) {
          return {
            ...p,
            quantity: quantity - 1,
          };
        }

        return p;
      });

      setCart([...updatedCart]);
    } else {
      const updatedCart = cart.filter((p) => p.id !== product.id);
      setCart([...updatedCart]);
    }
  };

  const increaseQuantity = () => {
    handleIncrease();
  };

  const removeItemFromCart = () => {
    if (cart.length === 1) {
      setCart([]);
      const cartJSON = JSON.stringify([]);

      localStorage.setItem('cart', cartJSON);
    } else {
      const updatedCart = cart.filter((p) => {
        return p.id !== product.id;
      });

      setCart([...updatedCart]);
    }
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
            <img
              src={`${publicUrl}/${product.image}`}
              alt={product.name}
              className="cartItem__info__img"
            />
          </div>
          <h2 className="cartItem__info__name">{product.name}</h2>
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

          <p className="cartItem__calc__price">{product.price * quantity}$</p>
        </div>
      </div>
    </>
  );
};
