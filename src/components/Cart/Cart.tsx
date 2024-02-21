import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../icons/arrow-left.svg';
import { useCartStore } from '../../storage/CartStore';
import { CartItem } from '../CartItem/CartItem';
import { SuccessModal } from '../SuccessModal/SuccessModal';
import './Cart.scss';

export const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const { clearCart } = useCartStore.getState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const [totalPrice, totalAmount] = cart.reduce(
    (acc, cartItem) => {
      const curr: [number, number] = [...acc];
      curr[0] = acc[0] + cartItem.product.price * cartItem.quantity;
      curr[1] += cartItem.quantity;
      return curr;
    },
    [0, 0]
  );

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
                key={item.product?.id}
                name={item.product?.name}
                price={item.product?.price}
                image={item.product?.image}
                product={item.product}
                quantity={item.quantity || 0}
              />
            ))}
          </section>
          <section className="cart__calculator">
            <div className="cart__calculator__price-container">
              <p className="cart__calculator__price">
                {`$
                ${totalPrice}
                `}
              </p>
              <p className="cart__calculator__total">
                Total for {totalAmount}{' '}
                {totalAmount === 1 ? 'product' : 'products'}
              </p>
            </div>
            <div className="cart__calculator__line" />
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
