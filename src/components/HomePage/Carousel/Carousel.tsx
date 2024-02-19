/* eslint-disable max-len */
import React, { useState } from 'react';
import './Carousel.scss';
import vector from './vector.png';

interface Slide {
  url: string;
  title: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

// const slideStyles: React.CSSProperties = {
//   width: '100%',
//   height: '100%',
//   borderRadius: '10px',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// };

// const rightArrowStyles: React.CSSProperties = {
//   position: 'absolute',
//   top: '50%',
//   transform: 'translate(0, -50%)',
//   right: '32px',
//   fontSize: '45px',
//   color: '#fff',
//   zIndex: 1,
//   cursor: 'pointer',
// };

// const leftArrowStyles: React.CSSProperties = {
//   position: 'absolute',
//   top: '50%',
//   transform: 'translate(0, -50%)',
//   left: '32px',
//   fontSize: '45px',
//   color: '#fff',
//   zIndex: 1,
//   cursor: 'pointer',
// };

// const sliderStyles: React.CSSProperties = {
//   position: 'relative',
//   height: '100%',
// };

// const dotsContainerStyles: React.CSSProperties = {
//   display: 'flex',
//   justifyContent: 'center',
// };

// const dotStyle: React.CSSProperties = {
//   margin: '0 3px',
//   cursor: 'pointer',
//   fontSize: '20px',
// };

const Carousel: React.FC<ImageSliderProps> = ({ slides }) => {
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
    <div className="slider">
      <div className="slider__buttons">
        <div className="slider__buttons-left" onClick={goToPrevious}>
          ❰
        </div>
        <button className="slider__buttons-right" onClick={goToNext}>
          <img
            className="slider__buttons-right-vector"
            src={vector}
            alt="vector"
          />
          {/* ❱ */}
        </button>
      </div>
      <div className="slider__slides" style={slideStylesWidthBackground}></div>
      <div className="slider__tabs">
        {slides.map((slide, slideIndex) => (
          <div
            className={`slider__tabs-tab ${currentIndex === slideIndex ? 'tab-active' : ''}`}
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
