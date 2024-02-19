/* eslint-disable max-len */
import React from 'react';
import './FavouritesPage.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { useFavoritesStore } from '../../storage/FavouritesStore';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

const FavouritesPage: React.FC = () => {
  const favoriteProducts = useFavoritesStore((state) => state.favoriteProducts);

  return (
    <div className="favourites">
      <div className="favourites__header">
        <Breadcrumbs path={'Favourites'} />
      </div>
      <div className="favourites__title">Favourites</div>
      <div className="favourites__count">{favoriteProducts.length} items</div>
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
