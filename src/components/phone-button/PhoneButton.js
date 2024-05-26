import React from 'react';
import PropTypes from 'prop-types';
import './phone-button.scss';

const PhoneButton = ({ iconSrc, buttonText }) => {
  return (
    <button className="icon-button">
      <img src={iconSrc} alt="icon" className="icon" />
      <span className="button-text">{buttonText}</span>
    </button>
  );
};

PhoneButton.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default PhoneButton;
