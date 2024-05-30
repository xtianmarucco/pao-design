import React from 'react';
import Carousel from '../carousel/Carousel';
import ProjectDescription from '../project-description/ProjectDescription';
import "./projects-section.css";
import projects from '../../data/projects.json';
function ProjectsSection() {
  return (
    <div id='projects-section'>
       <section id="carousel">
        <Carousel>
        {projects.map((project, index) => (
          <ProjectDescription
            key={index}
            projectTitle={project.title}
            buttonColor={project.buttonColor}
            projectTextDescription={project.description}
            images={project.images}
          />
        ))} 
        </Carousel>
      </section>
    </div>
  )
}

export default ProjectsSection