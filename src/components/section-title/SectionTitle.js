import React from 'react';
import PropTypes from 'prop-types';
import './section-title.scss';

const SectionTitle = ({ title, imgSrc, borderWidth, borderColor, borderRadius, cornerSize, backgroundColor }) => {
  return (
    <div
      className="section-title-container"
      style={{
        borderWidth: `${borderWidth}px`,
        borderColor: borderColor,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        cornerSize: cornerSize,
      }}
    >
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>
      <img className="title-section-icon" src={imgSrc} alt="icon" />
      <h1 className="title-section-text">{title}</h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  classNameImg: PropTypes.string,
  imgSrc: PropTypes.string,
  classNameTitle: PropTypes.string,
  borderWidth: PropTypes.number.isRequired,
  borderColor: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
  cornerSize: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

SectionTitle.defaultProps = {
  borderWidth: 3,
  borderColor: 'black',
  borderRadius: '35px',
  cornerSize: '16px',
};

export default SectionTitle;
