import React, { useState, useEffect } from 'react';
import '../styles/ImageSlider.css';
import Crou1Photoroom from '../assets/crou1-Photoroom.png';
import Crou2Photoroom from '../assets/crou2-Photoroom.png';
import Crou3Photoroom from '../assets/crou3-Photoroom.png';

const images = [
  Crou1Photoroom,
  Crou2Photoroom,
  Crou3Photoroom,
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      <button className="left-arrow" onClick={goToPrevious}>
        ❮
      </button>
      <button className="right-arrow" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
