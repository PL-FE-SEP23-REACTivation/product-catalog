/* eslint-disable max-len */
import create from 'zustand';

interface Product {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

interface FavoritesStore {
  favoriteProducts: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favoriteProducts: JSON.parse(localStorage.getItem('favoriteProducts') || '[]'),
  addToFavorites: (product) =>
    set((state) => {
      const updatedFavoriteProducts = [...state.favoriteProducts, product];
      localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavoriteProducts));
      return { favoriteProducts: updatedFavoriteProducts };
    }),
  removeFromFavorites: (productId) =>
    set((state) => {
      const updatedFavoriteProducts = state.favoriteProducts.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavoriteProducts));
      return { favoriteProducts: updatedFavoriteProducts };
    }),
}));
