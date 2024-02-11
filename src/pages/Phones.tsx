import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/Footer/ProductCard/ProductCard';
import { Product } from '../types/productType';
import phonesData from '../public/api/phones.json';

const Phones: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    const mappedPhones = phonesData.map((phone) => ({
      id: phone.id,
      category: '',
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
      <h2>Phones</h2>
      <div className="product-grid">
        {phones.map((phone) => (
          <ProductCard key={phone.id} product={phone} />
        ))}
      </div>
    </div>
  );
};

export default Phones;
