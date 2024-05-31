import React from 'react';
import Carousel from '../carousel/Carousel';
import Project from '../project-component/project';
import "./projects-section.css";
import projects from '../../data/projects.json';

function ProjectsSection() {
  return (
    <div id='projects-section'>
       <section id="carousel">
       <Carousel>
       {projects.map((project, index) => (
          <Project 
            key={index}
            title={project.title}
            buttonColor={project.buttonColor}
            description={project.description}
            icons={project.icons}
            images={project.images}
          />
        ))}
      </Carousel>
      </section>
    </div>
  )
}

export default ProjectsSection