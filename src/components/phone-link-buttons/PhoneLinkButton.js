import React from 'react';
import PropTypes from 'prop-types';
import './phone-links-button.css';

const PhoneLinkButton = ({ iconSrc, text, linkUrl, filePath, fileName  }) => {
  return (
    <a href={linkUrl} download={fileName} target="_blank" rel="noopener noreferrer" className="phone-link-button">
      <img src={iconSrc} alt="icon" className="button-icon" />
      <p className="comic-button__text">{text}</p>
    </a>
  );
};

PhoneLinkButton.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default PhoneLinkButton;
