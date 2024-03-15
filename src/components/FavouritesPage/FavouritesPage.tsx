/* eslint-disable max-len */
import React from 'react';
import { useFavoritesStore } from '../../storage/FavouritesStore';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { ProductCard } from '../ProductCard/ProductCard';
import './FavouritesPage.scss';
import { useThemeStore } from '../../storage/ThemeStore';

const FavouritesPage: React.FC = () => {
  const { darkMode } = useThemeStore();
  const favoriteProducts = useFavoritesStore((state) => state.favoriteProducts);

  return (
    <div className={`favourites ${darkMode ? 'dark-mode' : ''}`}>
      <div className="favourites__header">
        <Breadcrumbs path={'favourites'} />
        <h1 className="favourites__title">Favourites</h1>
        <div className="favourites__count">{favoriteProducts.length} items</div>
      </div>
      <div className="favourites__content">
        {favoriteProducts.map((product) => (
          <div className="favourites__content-items" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
