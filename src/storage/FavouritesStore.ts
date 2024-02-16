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
  favoriteProducts: [],
  addToFavorites: (product) =>
    set((state) => ({
      favoriteProducts: [...state.favoriteProducts, product],
    })),
  removeFromFavorites: (productId) =>
    set((state) => ({
      favoriteProducts: state.favoriteProducts.filter(
        (product) => product.id !== productId
      ),
    })),
}));
