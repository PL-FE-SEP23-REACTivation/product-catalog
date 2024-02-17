import React, { useEffect, useState } from 'react';
import phonesData from '../assets/api/products.json';
import { CatalogPage } from '../components/CatalogPage/CatalogPage';
import { Product } from '../types/productType';
import { useParams } from 'react-router-dom';
import { getProductsByCategorie } from '../api/products';

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { catalog } = useParams();

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
        await getProductsByCategorie(catalog)
          .then((data) => setProducts(data))
          .catch((e) => console.log(e));
      }
    };

    getProducts();
  }, [catalog]);

  return <CatalogPage products={products} path={pathName} />;
};

export default Catalog;
