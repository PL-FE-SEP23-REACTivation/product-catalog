import { FC } from 'react';
import { Product } from '../../types/productType';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from '../ProductCard/ProductCard';
import './CatalogPage.scss';

type Props = {
  path: 'Phones' | 'Tablets' | 'Accessories' | 'Cart' | 'Favourites';
  products: Product[];
};

export const CatalogPage: FC<Props> = ({ path, products }) => {
  return (
    <div className="phones">
      <Breadcrumbs path={path} />
      <h1 className="phones_title">Mobile phones</h1>
      <div className="phones_count">{`${products.length} models`}</div>
      <div className="phones_cards">
        {products.map((product) => (
          <div className="phones_cards_item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="phones_pagination_container">
        <Pagination total={30} perPage={6} />
      </div>
    </div>
  );
};
