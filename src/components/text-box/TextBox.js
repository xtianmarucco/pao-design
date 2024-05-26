import React from 'react';
import PropTypes from 'prop-types';
import './text-box.scss'; 

const TextBox = ({ text }) => {
    return (
      <div className="textbox-container">
        <div className="textbox-content">
          <p>{text}</p>
        </div>
      </div>
    );
  };
  
  TextBox.propTypes = {
    text: PropTypes.string.isRequired,
  };

export default TextBox;