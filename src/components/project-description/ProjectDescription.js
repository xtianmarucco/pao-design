import React from 'react';
import './project-description.css';

const ProjectDescription = ({ projectTitle, buttonColor, projectTextDescription, images }) => {
  return (
    <div className="project-description">
      <button className="project-button" style={{ backgroundColor: buttonColor }}>
        {projectTitle}
      </button>
      <div className="project-text">
        {projectTextDescription}
      </div>
      <div className="project-images">
        {images.map((image, index) => (
          <div
            key={index}
            className="project-image"
            style={{ backgroundImage: `url(${image.url})`, backgroundColor: image.backgroundColor }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDescription;