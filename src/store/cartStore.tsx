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
  const { cart } = useCartStore();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return <>{children}</>;
}
