import React, { useEffect, useState } from 'react';
import { CatalogPage } from '../components/CatalogPage/CatalogPage';
import { Product } from '../types/productType';
import { useParams, useSearchParams } from 'react-router-dom';
import { getProductsByCategorie, getQuantityByCategory } from '../api/products';
import { Quantity } from '../types/quantityType';

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsQuantity, setProductsQuantity] = useState<Quantity | null>();
  const { catalog } = useParams();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || 'oldest';
  const perPage = searchParams.get('perPage') || 16;
  const page = searchParams.get('page') || 1;
  const search = searchParams.get('search') || '';
  const quantity = search ? products.length : productsQuantity?.quantity;

  let pathName: 'Phones' | 'Tablets' | 'Accessories';

  switch (catalog) {
  case 'phones':
    pathName = 'Phones';
    break;
  case 'accessories':
    pathName = 'Accessories';
    break;
  case 'tablets':
    pathName = 'Tablets';
    break;
  default:
    pathName = 'Phones';
  }

  useEffect(() => {
    const getProducts = async () => {
      if (catalog) {
        await getProductsByCategorie(
          // eslint-disable-next-line max-len
          `${catalog}?sortBy=${sortBy}&perPage=${perPage}&page=${page}&search=${search}`
        )
          .then((data) => setProducts(data))
          .catch((e) => console.log(e));
      }
    };

    getProducts();
  }, [catalog, sortBy, perPage, page, search]);

  useEffect(() => {
    const getProductsQuantity = async () => {
      if (catalog) {
        await getQuantityByCategory(catalog)
          .then((data) => setProductsQuantity(data))
          .catch((e) => console.log(e));
      }
    };

    getProductsQuantity();
  }, [catalog]);
  console.log(productsQuantity);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, catalog]);

  return (
    <CatalogPage
      products={products}
      path={pathName}
      productsQuantity={quantity}
    />
  );
};

export default Catalog;
