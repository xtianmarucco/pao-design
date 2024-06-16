import React from 'react';
import Carousel from '../carousel/Carousel';
import Project from '../project-component/project';
import "./projects-section.css";
import projects from '../../data/projects.json';

const ProjectsSection = () => {
  return (
    <>
  
    <div id="carousel">  
       <Carousel>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            buttonColor={project.buttonColor}
            description={project.description}
            icons={project.icons}
            images={project.images}
            iconBackgroundColor={project.iconBackgroundColor} 
            iconBorderRadius="10px" // Example value for border-radius
            iconPadding="5px"
            iconHeight="50px"
          />
        ))}
      </Carousel>
      </div>
      </>
  )
}

export default ProjectsSection ;