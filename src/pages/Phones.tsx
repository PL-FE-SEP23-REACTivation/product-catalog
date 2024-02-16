import React, { useEffect, useState } from 'react';
import phonesData from '../assets/api/products.json';
import { ProductCard } from '../components//ProductCard/ProductCard';
import { Product } from '../types/productType';
const Phones: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    const mappedPhones = phonesData
      .filter((phone) => phone.category === 'phones')
      .map((phone) => ({
        id: phone.id,
        category: 'phones',
        itemId: phone.itemId,
        name: phone.name,
        fullPrice: phone.fullPrice,
        price: phone.price,
        screen: phone.screen,
        capacity: phone.capacity,
        color: phone.color,
        ram: phone.ram,
        year: phone.year,
        image: phone.image,
      }));

    setPhones(mappedPhones);
  }, []);

  return (
    <div>
      <div className="product-grid">
        {phones.map((phone) => (
          <ProductCard key={phone.id} product={phone} />
        ))}
      </div>
    </div>
  );
};

export default Phones;
