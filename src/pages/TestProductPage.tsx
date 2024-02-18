import React from 'react';
import { useParams } from 'react-router-dom';
import phonesData from '../../public/api/phones.json';
import PageNotFound from '../components/PageNotFound/PageNotFound';

const TestProductPage: React.FC = () => {
  const { id } = useParams();

  const phone = phonesData.find((phone) => phone.id === id);

  if (!phone) {
    return <PageNotFound />;
  }

  return (
    <div>
      <h2>{phone.name}</h2>
      <p>Capacity: {phone.capacity}</p>
      <p>Price: {phone.priceRegular}</p>
    </div>
  );
};

export default TestProductPage;
