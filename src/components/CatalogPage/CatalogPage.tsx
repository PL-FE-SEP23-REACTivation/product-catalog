import { FC } from 'react';
import { Product } from '../../types/productType';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Dropdown } from '../Dropdown/Dropdown';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from '../ProductCard/ProductCard';
import './CatalogPage.scss';

type Props = {
  path: 'Phones' | 'Tablets' | 'Accessories';
  products: Product[];
};

export const CatalogPage: FC<Props> = ({ path, products }) => {
  return (
    <div className="catalog">
      <Breadcrumbs path={path} />
      <h1 className="catalog_title">
        {path === 'Phones' ? 'Mobile Phones' : path}
      </h1>
      <div className="catalog_count">{`${products.length} models`}</div>
      <div className="catalog__dropdowns">
        <Dropdown
          name="Sort by"
          options={['newest', 'oldest', 'highest price', 'lowest price']}
          paramName="sortBy"
          className="dropdowns__sort-by"
        />
        <Dropdown
          name="Items on page"
          options={[16, 32, 64]}
          paramName="perPage"
          className="dropdowns__per-page"
        />
      </div>
      <div className="catalog_cards">
        {products.map((product) => (
          <div className="catalog_cards_item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="catalog_pagination_container">
        <Pagination total={30} perPage={6} />
      </div>
    </div>
  );
};
