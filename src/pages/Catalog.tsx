import React, { useEffect, useState } from 'react';
import phonesData from '../assets/api/products.json';
import { CatalogPage } from '../components/CatalogPage/CatalogPage';
import { Product } from '../types/productType';
import { useParams } from 'react-router-dom';

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
    //ready to fetch from db
    {
      /*
    const getProducts = async () => {
      if (catalog) {
        await getProductsByCategorie(category)
          .then((data) => setProducts(data))
          .catch((e) => console.log(e));
      }
    }

    getProducts();
  */
    }
    // poniższe z useEffect należy usunąć
    const mappedPhones = phonesData
      .filter((phone) => phone.category === 'phones')
      .map((phone) => ({
        id: phone.id,
        category: 'phones',
        name: phone.name,
        fullPrice: phone.fullPrice,
        price: phone.price,
        screen: phone.screen,
        capacity: phone.capacity,
        color: phone.color,
        ram: phone.ram,
        image: phone.image,
      }));

    setProducts(mappedPhones);
    // usunać aż do tego miejsca :)
  }, []);

  return <CatalogPage products={products} path={pathName} />;
};

export default Catalog;
