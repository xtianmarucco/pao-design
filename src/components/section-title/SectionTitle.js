import React from 'react';
import PropTypes from 'prop-types';
import './section-title.scss';

const SectionTitle = ({ title, classNameImg, imgSrc, classNameTitle, maxWidth, width, height, borderWidth, borderColor, borderRadius, cornerSize, backgroundColor }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    maxWidth: maxWidth,
    width: width,
    height: height,
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
  };

  const imageStyle = {
    marginRight: 'auto',

  };

  const titleStyle = {
    marginRight: 'auto',

  };

  const cornerStyle = {
    position: 'absolute',
    width: cornerSize,
    height: cornerSize,
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: '50%',
    backgroundColor: 'white',
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...cornerStyle, top: `-10px`, left: `10px` }}></div>
      <div style={{ ...cornerStyle, top: `-10px`, right: `10px` }}></div>
      <div style={{ ...cornerStyle, bottom: `-10px`, left: `10px` }}></div>
      <div style={{ ...cornerStyle, bottom: `-10px`, right: `14px` }}></div>
      <img className={classNameImg} src={imgSrc} alt="icon" style={imageStyle} />
      <h1 className={classNameTitle} style={titleStyle}>{title}</h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  classNameImg: PropTypes.string,
  imgSrc: PropTypes.string,
  classNameTitle: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
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
