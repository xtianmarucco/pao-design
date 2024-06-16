import React from 'react';
import Image from '../image/Image';
import './project.css';

const Project = ({ title, buttonColor, description, icons, images, iconBackgroundColor, iconBorderRadius, iconPadding, iconHeight }) => {
  return (
    <div className="project-container">
  
      <div className="top-section-projects">
        <div className="project-header">
          <button className="project-button" style={{ backgroundColor: buttonColor }}>
            {title}
          </button>
          <div className="project-description"><p>{description}</p></div>
          <div className="project-icons">
            {icons.map((icon, index) => (
              <Image
                key={index}
                src={icon.url}
                alt={`icon-${index}`}
                className="project-icon"
                style={{ backgroundColor: iconBackgroundColor, borderRadius: iconBorderRadius, padding: iconPadding, height:iconHeight }}
              />
            ))}
          </div>
        </div>
        <div className="project-images">
          {images.slice(0, 2).map((image, index) => (
            <Image
              key={index}
              src={image.url}
              alt={`project-image-${index}`}
              className="project-image"
            />
          ))}
        </div>
      </div>
      <div className="bottom-section-projects">
        {images.slice(2, 4).map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt={`project-image-${index}`}
            className="project-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
