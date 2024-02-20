import React, { useEffect, useState } from 'react';
import './NewProducts.scss';
import { ProductCard } from '../../ProductCard/ProductCard';
import { Product } from '../../../types/productType';
import { getNewProducts } from '../../../api/products';

const NewProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getBrandNewProducts = async () => {
      await getNewProducts()
        .then((data) => setProducts(data))
        .catch((e) => console.log(e));
    };

    getBrandNewProducts();
  }, []);

  return (
    <>
      <h2>Brand new models</h2>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
};

export default NewProducts;
