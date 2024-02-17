// import React, { useEffect, useState } from 'react';
import './NewProducts.scss';
import { ProductCard } from '../../ProductCard/ProductCard';
// import { Product } from '../../../types/productType';
// import { getNewProducts } from '../../../api/products';

const NewProducts: React.FC = () => {
  //ready to use fetching data from db
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const getBrandNewProducts = async () => {
  //     await getNewProducts()
  //       .then(data => setProducts(data))
  //       .catch(e => console.log(e));
  //   };

  //   getBrandNewProducts();
  // }, []);

  //demo data => delete below product after using useEffect
  const product = {
    id: 1,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: '4.7\' IPS',
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
  };

  return (
    <>
      <h2>Brand new models</h2>
      {/* {products.map(product=>
        <ProductCard product={product} key={product.id} />
      )} */}
      <ProductCard product={product} />
    </>
  );
};

export default NewProducts;
