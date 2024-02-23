import React, { useState } from 'react';
import { Product } from '../../../types/productType';
import { ErrorNotification } from '../../ErrorNotification/ErrorNotification';
import { Loader } from '../../Loader/Loader';
import { ProductCard } from '../../ProductCard/ProductCard';
import './Slider.scss';

interface SliderProps {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  title: string;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  products,
  isLoading,
  isError,
  title,
  className,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevClick = () => {
    setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setSlideIndex((prevIndex) => Math.min(prevIndex + 1, products.length - 1));
  };

  const sliderClassName = `slider ${className}`;

  return (
    <div className={sliderClassName}>
      <div className="slider__header">
        <h1 className="slider__header--title slider-title-max">{title}</h1>
        <div className="slider__header--btn">
          <button
            className="slider__button slider__button-left"
            type="button"
            onClick={handlePrevClick}
            disabled={slideIndex === 0 || isError}
          />
          <button
            className="slider__button slider__button-right"
            type="button"
            onClick={handleNextClick}
            disabled={slideIndex === products.length - 4 || isError}
          />
        </div>
      </div>

      <div className="slider__content">
        {isLoading && !isError && <Loader />}
        {!isLoading && isError && <ErrorNotification />}
        {!isLoading && !isError && (
          <ul
            className="slider__list"
            style={{ transform: `translateX(-${slideIndex * (272 + 16)}px)` }}
          >
            {products.map((product) => (
              <li className="slider__item" key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
