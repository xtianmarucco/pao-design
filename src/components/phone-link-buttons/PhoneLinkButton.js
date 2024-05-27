import React from 'react';
import PropTypes from 'prop-types';
import './phone-links-button.scss';

const PhoneLinkButton = ({ iconSrc, text }) => {
  return (
    <button className="phone-link-button">
      <img src={iconSrc} alt="icon" className="button-icon" />
      <span className="comic-button__text">{text}</span>
    </button>
  );
};

PhoneLinkButton.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PhoneLinkButton;