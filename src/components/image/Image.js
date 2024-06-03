import React from 'react';
import './image.css'; 

const Image = ({ src, alt, className, style  }) => {
    return (
        <div className="image-container" style={style}>
            <img className={`responsive-image ${className}`}  src={src} alt={alt}/>
        </div>
    ); 
}

export default Image;
