import React, { useEffect, useState } from 'react';
import phonesData from '../assets/api/products.json';
import { CatalogPage } from '../components/CatalogPage/CatalogPage';
import { Product } from '../types/productType';

const Phones: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
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

    setPhones(mappedPhones);
  }, []);

  return <CatalogPage products={phones} path="Phones" />;
};

export default Phones;
