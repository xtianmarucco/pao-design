import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, classNameImg, imgSrc, classNameTitle, width, height, borderWidth, borderColor, borderRadius, cornerSize, backgroundColor }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinea los elementos al principio del contenedor
    position: 'relative', // Establece posición relativa para que los círculos se posicionen correctamente
    width: width,
    height: height,
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
  };

  const imageStyle = {
    marginLeft: '10%', // Margen izquierdo del 10%
  };

  const titleStyle = {
    marginLeft: '15%', // Margen izquierdo del 15%
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
      <div style={{ ...cornerStyle, top: -borderWidth, left: -borderWidth }}></div>
      <div style={{ ...cornerStyle, top: -borderWidth, right: -borderWidth }}></div>
      <div style={{ ...cornerStyle, bottom: -borderWidth, left: -borderWidth }}></div>
      <div style={{ ...cornerStyle, bottom: -borderWidth, right: -borderWidth }}></div>
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
