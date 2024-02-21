/* eslint-disable max-len */
import React, { useState } from 'react';
import './Carousel.scss';
import vector from './vector.png';

interface Slide {
  url: string;
  title: string;
}

interface ImagecarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<ImagecarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground: React.CSSProperties = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="carousel">
      <div className="carousel__buttons">
        <button className="carousel__buttons-left" onClick={goToPrevious}>
          <img
            className="carousel__buttons-left-vector"
            src={vector}
            alt="vector"
          />
          {/* ❰ */}
        </button>
      </div>
      <div
        className="carousel__slides"
        style={slideStylesWidthBackground}
      ></div>
      <button className="carousel__buttons-right" onClick={goToNext}>
        <img
          className="carousel__buttons-right-vector"
          src={vector}
          alt="vector"
        />
        {/* ❱ */}
      </button>
      <div className="carousel__tabs">
        {slides.map((slide, slideIndex) => (
          <div
            className={`carousel__tabs-tab ${currentIndex === slideIndex ? 'tab-active' : ''}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            {/* ● */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
