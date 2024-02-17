import React, { useEffect, useState } from 'react';
import './Carousel.scss';
import image1 from './banner-accessories.png';
import image2 from './banner-phones.png';
import image3 from './banner-tablets.png';

const Carousel: React.FC = () => {
  const settings = {
    step: 1,
    frameSize: 1,
    itemWidth: 500,
    animationDuration: 1000,
    infinite: true,
  };

  const images = [image1, image2, image3];

  const [currentImgPosition, setCurrentImgPosition] = useState(0);
  const finalImgPosition = images.length - settings.frameSize;

  const handlePrevImage = () => {
    if (currentImgPosition > 0) {
      setCurrentImgPosition((prev) =>
        prev - settings.step >= 0 ? prev - settings.step : 0
      );
    } else {
      setCurrentImgPosition(finalImgPosition);
    }
  };

  const handleNextImage = () => {
    if (currentImgPosition < finalImgPosition) {
      setCurrentImgPosition((prev) =>
        prev + settings.step <= finalImgPosition
          ? prev + settings.step
          : finalImgPosition
      );
    } else {
      setCurrentImgPosition(0);
    }
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(handleNextImage, 5000);

    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [handleNextImage]);

  return (
    <div className="Carousel">
      <div className="Carousel__controls Carousel__controls--next">
        <button
          type="button"
          className="Carousel__button Carousel__button--active"
          onClick={handlePrevImage}
        >
          &#8249;
        </button>
      </div>
      <ul className="Carousel__list">
        {images.map((image, index) => (
          <li
            key={image}
            style={{
              transform: `translateX(
                ${-(currentImgPosition * settings.itemWidth)}px)`,
              transition: `transform ${settings.animationDuration}ms ease`,
            }}
          >
            <img
              className="Carousel__image"
              src={image}
              alt={`${index + 1}`}
              width={settings.itemWidth}
            />
          </li>
        ))}
      </ul>

      <div className="Carousel__controls Carousel__controls--next">
        <button
          data-cy="next"
          type="button"
          className="Carousel__button Carousel__button--active"
          onClick={handleNextImage}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
