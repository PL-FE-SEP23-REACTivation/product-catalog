import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProductsByCategorie, getQuantity } from '../../api/products';
import { Category } from '../../types/categoryType';
import { Product } from '../../types/productType';
import { AllQuantity } from '../../types/quantityType';
import { capitalize } from '../../utils/helpers';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Dropdown } from '../Dropdown/Dropdown';
import { ErrorNotification } from '../ErrorNotification/ErrorNotification';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from '../ProductCard/ProductCard';
import { Search } from '../Search/Search';
import './CatalogPage.scss';

type Props = {
  path: Category;
};

const SORT_BY_VALUES = ['newest', 'oldest', 'highest price', 'lowest price'];
const PER_PAGE_VALUES = ['16', '32', '64'];

export const CatalogPage: FC<Props> = ({ path }) => {
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [isQuantityLoading, setIsQuantityLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsQuantity, setProductsQuantity] = useState<
    Partial<AllQuantity>
  >({ [path]: 0 });
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || 'newest';
  const perPage = searchParams.get('perPage') || 16;
  const page = searchParams.get('page') || 1;
  const search = searchParams.get('search') || '';
  const quantity = search ? products.length : productsQuantity[path] || 0;

  useEffect(() => {
    setIsProductsLoading(true);

    getProductsByCategorie(
      // eslint-disable-next-line max-len
      `${path}?sortBy=${sortBy}&perPage=${perPage}&page=${page}&search=${search}`
    )
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      })
      .finally(() => {
        setIsProductsLoading(false);
      });
  }, [path, sortBy, perPage, page, search]);

  useEffect(() => {
    setIsQuantityLoading(true);
    getQuantity(path)
      .then((data) => {
        const result = data.reduce(
          (acc: { [key: string]: number }, { category, count }) => {
            acc[category] = +count;
            return acc;
          },
          {}
        );
        setProductsQuantity(result);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      })
      .finally(() => {
        setIsQuantityLoading(false);
      });
  }, [path, search]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, path]);

  const catalogContent = isError ? (
    <ErrorNotification />
  ) : (
    <>
      <div className="catalog_cards">
        {products.map((product) => (
          <div className="catalog_cards_item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="catalog_pagination_container">
        {+quantity > +perPage && (
          <Pagination total={+quantity} perPage={+perPage} />
        )}
      </div>
    </>
  );

  return (
    <div className="catalog">
      <Breadcrumbs path={path} />
      <h1 className="catalog_title">
        {path === 'phones' ? 'Mobile Phones' : capitalize(path)}
      </h1>
      <div className="catalog_count">{`${quantity} models`}</div>
      <div className="filtrSearchBox">
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
        <div className="Catalog__search search">
          <Search />
        </div>
      </div>
      {isProductsLoading && isQuantityLoading ? <Loader /> : catalogContent}
    </div>
  );
};
