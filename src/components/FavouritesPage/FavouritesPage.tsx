/* eslint-disable max-len */
import React from 'react';
import homeIcon from '../../icons/home.svg';
import rightArrowIcon from '../../icons/right-arrow.svg';
import './FavouritesPage.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { useFavoritesStore } from '../../storage/FavouritesStore';

const FavouritesPage: React.FC = () => {
  const favoriteProducts = useFavoritesStore((state) => state.favoriteProducts);

  return (
    <div className="favourites">
      <div className="favourites__header">
        <img className="favourites__header-icon" src={homeIcon} alt="home" />
        <img
          className="favourites__header-icon"
          src={rightArrowIcon}
          alt="arrow"
        />
        <div className="favourites__header-category">Favourites</div>
      </div>
      <div className="favourites__title">
        Favourites
        <div className="favourites__title-count">
          {favoriteProducts.length} items
        </div>
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
