import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components//ProductCard/ProductCard';
import { Product } from '../types/productType';
import phonesData from '../public/api/phones.json';

const Phones: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    const mappedPhones = phonesData.map((phone) => ({
      id: phone.id,
      category: 'phones',
      itemId: phone.namespaceId,
      name: phone.name,
      fullPrice: phone.priceRegular,
      price: phone.priceDiscount,
      screen: phone.screen,
      capacity: phone.capacity,
      color: phone.color,
      ram: phone.ram,
      year: 0,
      image: phone.images[0],
    }));

    setPhones(mappedPhones);
  }, []);

  return (
    <div>
      <div className="product-grid">
        {phones.map((phone) => (
          <ProductCard
            key={phone.id}
            product={phone}
            imagePath={`img/phones/${phone.itemId}/${phone.color}/00.webp`}
          />
        ))}
      </div>
    </div>
  );
};

export default Phones;
