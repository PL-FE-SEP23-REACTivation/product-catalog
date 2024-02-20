import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Category } from '../../types/categoryType';
import { Product } from '../../types/productType';
import { capitalize } from '../../utils/helpers';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Dropdown } from '../Dropdown/Dropdown';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from '../ProductCard/ProductCard';
import './CatalogPage.scss';

type Props = {
  path: Category;
  products: Product[];
  productsQuantity: number;
};

const SORT_BY_VALUES = ['newest', 'oldest', 'highest price', 'lowest price'];
const PER_PAGE_VALUES = ['16', '32', '64'];

export const CatalogPage: FC<Props> = ({
  path,
  products,
  productsQuantity,
}) => {
  const [searchParams] = useSearchParams();
  const perPage = Number(searchParams.get('perPage')) || 16;

  return (
    <div className="catalog">
      <Breadcrumbs path={path} />
      <h1 className="catalog_title">
        {path === 'phones' ? 'Mobile Phones' : capitalize(path)}
      </h1>
      <div className="catalog_count">{`${productsQuantity} models`}</div>
      <div className="catalog__dropdowns dropdowns">
        <Dropdown
          name="Sort by"
          options={SORT_BY_VALUES}
          paramName="sortBy"
          className="dropdowns__sort-by"
        />
        <Dropdown
          name="Items on page"
          options={PER_PAGE_VALUES}
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
        {+productsQuantity > perPage && (
          <Pagination total={+productsQuantity} perPage={perPage} />
        )}
      </div>
    </div>
  );
};
