import React, { useEffect, useState } from 'react';
import './HotPrices.scss';
import { ProductCard } from '../../ProductCard/ProductCard';
import { Product } from '../../../types/productType';
import { getHotProducts } from '../../../api/products';

const HotPrices: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getHotPriceProducts = async () => {
      await getHotProducts()
        .then((data) => setProducts(data))
        .catch((e) => console.log(e));
    };

    getHotPriceProducts();
  }, []);

  return (
    <>
      <h2>Hot prices</h2>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
};

export default HotPrices;
