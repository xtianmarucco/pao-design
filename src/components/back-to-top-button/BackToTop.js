import React, { useState, useEffect } from 'react';
import './back-to-top.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <> {isVisible && (
      <div className="back-to-top">
       
          <button onClick={scrollToTop} className="back-to-top-button">
            
          </button>
        
      </div>
    )}</>
   
  );
};

export default BackToTopButton;
