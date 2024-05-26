import React from 'react';
import './image.scss'; 

const Image = ({ src, alt, className,  }) => {
    return (
        <div className="image-container">
            <img className={`responsive-image ${className}`}  src={src} alt={alt}/>
        </div>
    ); 
}

export default Image;
