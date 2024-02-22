/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import './Carousel.scss';
import { useThemeStore } from '../../../storage/ThemeStore';

interface Slide {
  url: string;
  title: string;
}

interface ImagecarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<ImagecarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { darkMode } = useThemeStore();

  useEffect(() => {
    const intervalId = setInterval(goToNext, 4000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

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
    <div
      className={`carousel ${darkMode ? 'dark-mode' : 'light-mode'}`}
      ref={containerRef}
    >
      <div className="carousel__container">
        <button
          className="carousel__container-buttons button-left"
          onClick={goToPrevious}
        ></button>
        <div
          className="carousel__slides"
          style={slideStylesWidthBackground}
        ></div>
        <button
          className="carousel__container-buttons button-right"
          onClick={goToNext}
        ></button>
      </div>
      <div className="carousel__tabs">
        {slides.map((slide, slideIndex) => (
          <div
            className={`carousel__tabs-tab ${currentIndex === slideIndex ? 'tab-active' : ''}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
