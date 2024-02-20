import React, { useState } from 'react';
import './NewProducts.scss';
import { ProductCard } from '../../ProductCard/ProductCard';
import arrowLeft from '../../../icons/arrow-left.svg';
import arrowRight from '../../../icons/arrow-right.svg';
import { Loader } from '../../Loader/Loader';
import { Product } from '../../../types/productType';

interface Props {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  title: string;
}

const NewProducts: React.FC<Props> = ({
  products,
  isLoading,
  isError,
  title,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevClick = () => {
    setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setSlideIndex((prevIndex) => Math.min(prevIndex + 1, products.length - 1));
  };

  return (
    <section className="newProducts">
      <div className="newProducts__header">
        <h1 className="newProducts__header--title">{title}</h1>
        <div className="newProducts__header--btn">
          <button
            className="newProducts__button"
            type="button"
            onClick={handlePrevClick}
            disabled={slideIndex === 0}
          >
            <img src={arrowLeft} alt="button-left" />
          </button>
          <button
            className="newProducts__button"
            type="button"
            onClick={handleNextClick}
            disabled={slideIndex === products.length - 4}
          >
            <img src={arrowRight} alt="button-left" />
          </button>
        </div>
      </div>

      <div className="newProducts__content">
        {isLoading && !isError && <Loader />}
        {!isLoading && isError && (
          <p>Error: Unable to load data from server!</p>
        )}
        {!isLoading && !isError && (
          <ul
            className="newProducts__list"
            // eslint-disable-next-line max-len
            style={{ transform: `translateX(-${slideIndex * (272 + 16)}px)` }}
          >
            {products.map((product) => (
              <li className="newProducts__item" key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default NewProducts;
