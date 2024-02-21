import React, { useEffect, useState } from 'react';
import './Categories.scss';
import { getAllQuantity } from '../../../api/products';
import { AllQuantity } from '../../../types/quantityType';

const Categories: React.FC = () => {
  const [quantity, setQuantity] = useState<Partial<AllQuantity>>();

  useEffect(() => {
    const getProductsQuantity = async () => {
      await getAllQuantity()
        .then((data) => {
          const result = data.reduce(
            (acc: { [key: string]: number }, { category, count }) => {
              acc[category] = +count;
              return acc;
            },
            {}
          );
          setQuantity(result);
        })
        .catch((e) => console.log(e));
    };

    getProductsQuantity();
  }, []);

  return (
    <>
      <h2>Shop by category</h2>
      <p>{`Mobile phones: ${quantity?.phones} models`}</p>
      <p>{`Tablets: ${quantity?.tablets} models`}</p>
      <p>{`Accessories: ${quantity?.accessories} models`}</p>
    </>
  );
};

export default Categories;
