/* eslint-disable max-len */
import React, { useState } from 'react';
import './Slider.scss';
import { ProductCard } from '../../ProductCard/ProductCard';
import { Product } from '../../../types/productType';
import { Loader } from '../../Loader/Loader';
import { useThemeStore } from '../../../storage/ThemeStore';

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
  const { darkMode } = useThemeStore();
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevClick = () => {
    setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setSlideIndex((prevIndex) => Math.min(prevIndex + 1, products.length - 1));
  };

  const sliderClassName = `slider ${className}`;

  return (
    <div
      className={`${sliderClassName} ${darkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <div className="slider__header">
        <h1 className="slider__header--title">{title}</h1>
        <div className="slider__header--btn">
          <button
            className="slider__button slider__button-left"
            type="button"
            onClick={handlePrevClick}
            disabled={slideIndex === 0}
          ></button>
          <button
            className="slider__button slider__button-right"
            type="button"
            onClick={handleNextClick}
            disabled={slideIndex === products.length - 4}
          ></button>
        </div>
      </div>

      <div className="slider__content">
        {isLoading && !isError && <Loader />}
        {!isLoading && isError && (
          <p>Error: Unable to load data from server!</p>
        )}
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
