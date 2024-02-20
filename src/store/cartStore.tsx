import { create } from 'zustand';
import { ReactNode, useEffect } from 'react';
import { Product } from '../types/productType';

interface TypeContext {
  cart: Product[];
  setCart: (newCart: Product[] | ((prevCart: Product[]) => Product[])) => void;
  clearCart: () => void;
}

const useCartStore = create<TypeContext>((set) => ({
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  setCart: (newCart) => {
    set((state) => {
      // eslint-disable-next-line max-len
      const updatedCart =
        typeof newCart === 'function' ? newCart(state.cart) : newCart;
      const cartWithDefaultQuantity = updatedCart.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));

      return { cart: cartWithDefaultQuantity };
    });
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));

export function useTContext() {
  return useCartStore();
}

export function CartProvider({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { cart, setCart, clearCart } = useCartStore();

  useEffect(() => {
    const savedCartJSON = localStorage.getItem('cart');

    if (savedCartJSON) {
      const savedCart = JSON.parse(savedCartJSON);
      setCart(savedCart);
    }
  }, [setCart]);

  useEffect(() => {
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);
  }, [cart]);

  return <>{children}</>;
}
