import React from 'react';
import PropTypes from 'prop-types';
import './text-box.css'; 

const TextBox = ({ text, text1, text2 }) => {
    return (
      <div className="textbox-container">
        <div className="textbox-content">
          <p>{text}</p>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    );
  };
  
  TextBox.propTypes = {
    text: PropTypes.string.isRequired,
  };

export default TextBox;