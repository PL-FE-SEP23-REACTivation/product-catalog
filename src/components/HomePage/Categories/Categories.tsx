import React, { useEffect, useState } from 'react';
import './Categories.scss';
import { getQuantityByCategory } from '../../../api/products';

const Categories: React.FC = () => {
  const [phones, setPhones] = useState<number>(0);
  const [tablets, setTablets] = useState<number>(0);
  const [accessories, setAccessories] = useState<number>(0);

  useEffect(() => {
    const getProductsQuantity = async () => {
      await getQuantityByCategory('phones')
        .then((data) => setPhones(data.quantity))
        .catch((e) => console.log(e));

      await getQuantityByCategory('tablets')
        .then((data) => setTablets(data.quantity))
        .catch((e) => console.log(e));

      await getQuantityByCategory('accessories')
        .then((data) => setAccessories(data.quantity))
        .catch((e) => console.log(e));
    };

    getProductsQuantity();
  }, []);

  return (
    <>
      <h2>Shop by category</h2>
      <p>{`Mobile phones: ${phones} models`}</p>
      <p>{`Tablets: ${tablets} models`}</p>
      <p>{`Mobile phones: ${accessories} models`}</p>
    </>
  );
};

export default Categories;
