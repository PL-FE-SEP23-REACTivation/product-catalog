import React, { useState } from 'react';
import './Slider.scss';
import { ProductCard } from '../../ProductCard/ProductCard';
import { Product } from '../../../types/productType';
import { Loader } from '../../Loader/Loader';
import arrowLeft from '../../../icons/arrow-left.svg';
import arrowRight from '../../../icons/arrow-right.svg';

interface SliderProps {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  title: string;
  className?: string;
  setIsLoadingPp?: (arg: boolean) => void;
}

export const Slider: React.FC<SliderProps> = ({
  products,
  isLoading,
  isError,
  title,
  className,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsLoadingPp = () => {},
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
        <h1 className="slider__header--title">{title}</h1>
        <div className="slider__header--btn">
          <button
            className="slider__button"
            type="button"
            onClick={handlePrevClick}
            disabled={slideIndex === 0}
          >
            <img src={arrowLeft} alt="button-left" />
          </button>
          <button
            className="slider__button"
            type="button"
            onClick={handleNextClick}
            disabled={slideIndex === products.length - 4}
          >
            <img src={arrowRight} alt="button-left" />
          </button>
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
              <li
                className="slider__item"
                onClick={() => setIsLoadingPp(true)}
                key={product.id}
              >
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
