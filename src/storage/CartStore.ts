import { create } from 'zustand';
import { Product } from '../types/productType';

export type cartItemType = { product: Product; quantity: number };

interface CartStore {
  cart: cartItemType[];
  setCart: (newCart: cartItemType[]) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  setCart: (newCart) => {
    set(() => {
      const cartWithDefaultQuantity = newCart.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      localStorage.setItem('cart', JSON.stringify(cartWithDefaultQuantity));

      return { cart: cartWithDefaultQuantity };
    });
  },
  addToCart: (product) =>
    set((state) => {
      const updatedCart = [...state.cart, { product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== productId
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  clearCart: () => {
    set(() => {
      localStorage.setItem('cart', JSON.stringify([]));
      return { cart: [] };
    });
  },
}));
