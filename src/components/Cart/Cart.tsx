import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../icons/arrow-left.svg';
import './Cart.scss';
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {
  return (
    <>
      <div className="cart">
        <section className="cart__title">
          <Link to="/phones" className="cart__title__link">
            <img
              src={ArrowLeft}
              alt="arrow left"
              className="cart__title__link__arrow"
            />
            <p className="cart__title__link__back">Back</p>
          </Link>
          <h1 className="cart__title__text">Cart</h1>
        </section>
        <div className="cart__main">
          <section className="cart__cartItems">
            <CartItem />
            <CartItem />
            <CartItem />
          </section>
          <section className="cart__calculator">
            <div className="cart__calculator__price-container">
              <p className="cart__calculator__price">$9999</p>
              <p className="cart__calculator__total">Total for 99 products</p>
            </div>

            <div className="cart__calculator__line" />
            <div className="cart__calculator__button-container">
              <button type="button" className="cart__calculator__checkout">
                Checkout
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
