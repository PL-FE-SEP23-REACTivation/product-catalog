import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getProductsByCategorie, getQuantityByCategory } from '../api/products';
import { CatalogPage } from '../components/CatalogPage/CatalogPage';
import { Category } from '../types/categoryType';
import { Product } from '../types/productType';
import { Quantity } from '../types/quantityType';
import Pagenotfound from './PageNotFound';

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsQuantity, setProductsQuantity] = useState<Quantity | null>();
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || 'oldest';
  const perPage = searchParams.get('perPage') || 16;
  const page = searchParams.get('page') || 1;

  let pathName: Category;

  if (
    category === 'phones' ||
    category === 'tablets' ||
    category === 'accessories'
  ) {
    pathName = category;
  } else {
    return <Pagenotfound />;
  }

  useEffect(() => {
    const getProducts = async () => {
      await getProductsByCategorie(
        `${category}?sortBy=${sortBy}&perPage=${perPage}&page=${page}`
      )
        .then((data) => setProducts(data))
        .catch((e) => console.log(e));
    };

    getProducts();
  }, [category, sortBy, perPage, page]);

  useEffect(() => {
    const getProductsQuantity = async () => {
      await getQuantityByCategory(category)
        .then((data) => setProductsQuantity(data))
        .catch((e) => console.log(e));
    };

    getProductsQuantity();
  }, []);
  console.log(productsQuantity);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, category]);

  return (
    <CatalogPage
      products={products}
      path={pathName}
      productsQuantity={productsQuantity?.quantity}
    />
  );
};

export default Catalog;
