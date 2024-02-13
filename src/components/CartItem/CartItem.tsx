import React, { useState } from 'react';
import testphoto from '../../images/testphoto.png';
import './CartItem.scss';

export const CartItem = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeItem = () => {
    // usuwanie
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="cartItem">
        <div className="cartItem__info">
          <button
            type="button"
            className="cartItem__info__close"
            onClick={removeItem}
          />
          <img src={testphoto} alt="iphone" className="cartItem__info__img" />
          <h2 className="cartItem__info__name">
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </h2>
        </div>

        <div className="cartItem__calc">
          <button
            type="button"
            onClick={decreaseQuantity}
            className={`cartItem__calc__minus cartItem__calc__quantity ${
              quantity === 1 ? 'inactive' : ''
            }`}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            type="button"
            onClick={increaseQuantity}
            className="cartItem__calc__plus cartItem__calc__quantity"
          >
            +
          </button>
          <p className="cartItem__calc__price">$999</p>
        </div>
      </div>
    </>
  );
};
