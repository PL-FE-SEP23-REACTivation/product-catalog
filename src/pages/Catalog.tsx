import React, { useEffect, useState } from 'react';
import { CatalogPage } from '../components/CatalogPage/CatalogPage';
import { Product } from '../types/productType';
import { useParams, useSearchParams } from 'react-router-dom';
import { getProductsByCategorie } from '../api/products';

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsQuantity, setPeroductsQuantity] = useState<number>(0);
  const { catalog } = useParams();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || 'oldest';
  const perPage = searchParams.get('perPage') || 16;
  const page = searchParams.get('page') || 1;

  console.log(sortBy, perPage, page, productsQuantity, setPeroductsQuantity);

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
          `${catalog}?sortBy=${sortBy}&perPage=${perPage}&page=${page}`
        )
          .then((data) => setProducts(data))
          .catch((e) => console.log(e));
      }
    };

    getProducts();
  }, [catalog, sortBy, perPage, page]);

  // useEffect(()=> {
  //   const getProductsQuantity = async () => {
  //     if (catalog) {
  //       await getQuantityByCategory(catalog)
  //         .then((data) => setPeroductsQuantity(+data))
  //         .catch((e) => console.log(e));
  //     }
  //   };

  //   getProductsQuantity();
  // }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, catalog]);

  return (
    <CatalogPage
      products={products}
      path={pathName}
      // productsQuantity={+productsQuantity}
    />
  );
};

export default Catalog;
