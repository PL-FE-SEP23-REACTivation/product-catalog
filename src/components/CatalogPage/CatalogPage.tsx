import { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product } from '../../types/productType';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Dropdown } from '../Dropdown/Dropdown';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from '../ProductCard/ProductCard';
import './CatalogPage.scss';
import { Search } from '../Search/Search';

type Props = {
  path: 'Phones' | 'Tablets' | 'Accessories';
  products: Product[];
  productsQuantity: number | undefined;
};

const SORT_BY_VALUES = ['newest', 'oldest', 'highest price', 'lowest price'];
const PER_PAGE_VALUES = ['16', '32', '64'];

export const CatalogPage: FC<Props> = ({
  path,
  products,
  productsQuantity = 100,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const perPage = Number(searchParams.get('perPage')) || 16;

  useEffect(() => {
    const currentSort = searchParams.get('sortBy') || SORT_BY_VALUES[0];
    const currentPerPage = searchParams.get('perPage') || PER_PAGE_VALUES[0];
    searchParams.set('sortBy', currentSort);
    searchParams.set('perPage', currentPerPage);
    setSearchParams(searchParams);
  }, []);

  return (
    <div className="catalog">
      <Breadcrumbs path={path} />
      <h1 className="catalog_title">
        {path === 'Phones' ? 'Mobile Phones' : path}
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
        <Search />
      </div>
      <div className="catalog_cards">
        {products.map((product) => (
          <div className="catalog_cards_item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="catalog_pagination_container">
        <Pagination total={+productsQuantity} perPage={perPage} />
      </div>
    </div>
  );
};
