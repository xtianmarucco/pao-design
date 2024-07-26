import React from 'react';
import './phone-button.css';


const PhoneButtonDownload = ({ iconSrc, buttonText, phoneNumber, className, filePath, fileName  }) => {
  return (
    <a href={filePath} download={fileName}>
      <button className={`icon-button ${className}`}>
        <img src={iconSrc} alt="icon" className="icon" />
        <span className="button-text">{buttonText}</span>
      </button>
    </a>
  );
};

export default PhoneButtonDownload;
