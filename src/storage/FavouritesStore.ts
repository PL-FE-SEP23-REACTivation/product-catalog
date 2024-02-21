/* eslint-disable max-len */
import { create } from 'zustand';
import { Product } from '../types/productType';

interface FavoritesStore {
  favoriteProducts: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favoriteProducts: JSON.parse(
    localStorage.getItem('favoriteProducts') || '[]'
  ),
  addToFavorites: (product) =>
    set((state) => {
      const updatedFavoriteProducts = [...state.favoriteProducts, product];
      localStorage.setItem(
        'favoriteProducts',
        JSON.stringify(updatedFavoriteProducts)
      );
      return { favoriteProducts: updatedFavoriteProducts };
    }),
  removeFromFavorites: (productId) =>
    set((state) => {
      const updatedFavoriteProducts = state.favoriteProducts.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem(
        'favoriteProducts',
        JSON.stringify(updatedFavoriteProducts)
      );
      return { favoriteProducts: updatedFavoriteProducts };
    }),
}));
