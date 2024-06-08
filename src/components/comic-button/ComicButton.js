import React from 'react';
import './comic-button.css';

const ComicButton = ({ iconSrc, text, filePath, fileName  }) => {
  return (
    <a href={filePath} download={fileName}>
    <button className="comic-button">
      <img src={iconSrc} alt="icon" className="comic-button__icon" />
      <span className="comic-button__text">{text}</span>
    </button>
    </a>
  );
};



export default ComicButton;
