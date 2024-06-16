import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../section-title/SectionTitle'
import './carousel.css';

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  // useEffect(() => {
  //   slideInterval.current = setInterval(nextSlide, 10000);
  //   return () => clearInterval(slideInterval.current);
  // }, [children.length]);

  return (
    <div className="carousel">
      <div className='title-container-projects'>
      <SectionTitle
           id="projects"
            title="Portfolio"
            classNameImg="about-me-icon"
            imgSrc="/about-me-icon.svg"
            borderWidth={3}
            borderColor="black"
            borderRadius="35px"
            cornerSize="16px"
            backgroundColor="#9CEB60"
          />
      </div>
      <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {children.map((child, index) => (
          <div className="carousel-item" key={index}>
            {child}
          </div>
        ))}
      </div>
      <div className="carousel-control-prev">
      <button className="carousel-control prev" onClick={prevSlide}>
      </button>
      </div>
      <div className="carousel-control-next">
      <button className="carousel-control next" onClick={nextSlide}>
      </button>
      </div>
    </div>
  );
};

export default Carousel;
