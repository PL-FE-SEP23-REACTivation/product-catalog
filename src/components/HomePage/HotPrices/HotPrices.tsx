import React from 'react';
import { Product } from '../../../types/productType';
import { Slider } from '../Slider/Slider';

interface Props {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  title: string;
}
const HotPrices: React.FC<Props> = ({
  products,
  isLoading,
  isError,
  title,
}) => {
  return (
    <Slider
      products={products}
      isLoading={isLoading}
      isError={isError}
      title={title}
      className="hot-prices"
    />
  );
};

export default HotPrices;
