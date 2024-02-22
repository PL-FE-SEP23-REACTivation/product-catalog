import React from 'react';
import { useParams } from 'react-router-dom';
import { CatalogPage } from '../components/CatalogPage/CatalogPage';
import Pagenotfound from './PageNotFound';

const Catalog: React.FC = () => {
  const { category } = useParams();
  return category === 'phones' ||
    category === 'tablets' ||
    category === 'accessories' ? (
      <CatalogPage path={category} />
    ) : (
      <Pagenotfound />
    );
};

export default Catalog;
