import React from "react";
import Image from "../image/Image";
import "./project.css";

const Project = ({ title, buttonColor, description, icons }) => {
  return (
    <div className="project-container">
      <div className="top-section-projects">
        <div className="project-header">
          <button
            className="project-button"
            style={{ backgroundColor: buttonColor }}
          >
            {title}
          </button>
          <div className="project-description">{description}</div>
          <div className="project-icons">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="project-icon"
                style={{
                  backgroundImage: `url(${icon.url})`,
                  backgroundColor: icon.backgroundColor,
                }}
              />
            ))}
          </div>
        </div>
        <div>
          <Image />
          <Image />
        </div>
      </div>
      <div className="botton-section-projects">
        <Image />
        <Image />
      </div>
    </div>
  );
};

export default Project;
