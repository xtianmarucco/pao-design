import React from 'react';
import PropTypes from 'prop-types';
import './comic-button.scss';

const ComicButton = ({ iconSrc, text }) => {
  return (
    <button className="comic-button">
      <img src={iconSrc} alt="icon" className="comic-button__icon" />
      <span className="comic-button__text">{text}</span>
    </button>
  );
};

ComicButton.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ComicButton;
