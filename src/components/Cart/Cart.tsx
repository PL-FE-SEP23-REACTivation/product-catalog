import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../icons/arrow-left.svg';
import './Cart.scss';
import { Product } from '../../types/productType';
import { CartItem } from '../CartItem/CartItem';
import { useTContext } from '../../store/cartStore';
import { SuccessModal } from '../SuccessModal/SuccessModal';

export const Cart = () => {
  const { cart, clearCart } = useTContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const calculateTotalPrice = (itemsInCart: Product[]) => {
    return itemsInCart.reduce((total, cartItem) => {
      if (cartItem.quantity !== undefined) {
        return total + cartItem.price * cartItem.quantity;
      }

      return total;
    }, 0);
  };

  const handleCheckout = () => {
    setMessage('Your order has been placed successfully!');
    setIsModalOpen(true);
    clearCart();

    setTimeout(() => {
      window.location.href = '/phones';
    }, 3000);
  };

  return (
    <>
      <div className="cart">
        <section className="cart__title">
          <Link to="/phones" className="cart__title__link">
            <img
              src={ArrowLeft}
              alt="arrow right"
              className="cart__title__link__arrow"
            />
            <p className="cart__title__link__back">Back</p>
          </Link>
          <h1 className="cart__title__text">Cart</h1>
        </section>
        <div className="cart__main">
          <section className="cart__cartItems">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                product={item}
                quantity={item?.quantity || 0}
              />
            ))}
          </section>
          <section className="cart__calculator">
            <div className="cart__calculator__price-container">
              <p className="cart__calculator__price">
                {`$
                ${calculateTotalPrice(cart)}
                `}
              </p>
              <p className="cart__calculator__total">
                Total for {cart.length}{' '}
                {cart.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            <button
              className="cart__calculator__checkout"
              onClick={handleCheckout}
              disabled={cart.length === 0}
            >
              Checkout
            </button>
          </section>
        </div>
      </div>
      {isModalOpen && (
        <SuccessModal message={message} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};
