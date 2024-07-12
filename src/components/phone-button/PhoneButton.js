import React from 'react';
import './phone-button.css';


const PhoneButton = ({ iconSrc, buttonText, phoneNumber, className }) => {
  return (
    <a href={`tel:${phoneNumber}`}>
      <button className={`icon-button ${className}`}>
        <img src={iconSrc} alt="icon" className="icon" />
        <span className="button-text">{buttonText}</span>
      </button>
    </a>
  );
};

export default PhoneButton;
