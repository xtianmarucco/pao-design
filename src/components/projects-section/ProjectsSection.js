import React from 'react';
import Carousel from '../carousel/Carousel';
import Project from '../project-component/project';
import SectionTitle from '../section-title/SectionTitle'
import "./projects-section.css";
import projects from '../../data/projects.json';

const ProjectsSection = () => {
  return (
    <div id='projects-section'>
       <SectionTitle
            title="Portfolio"
            classNameImg="about-me-icon"
            imgSrc="/about-me-icon.svg"
            classNameTitle="about-me-title-projects"
            borderWidth={3}
            borderColor="black"
            borderRadius="35px"
            cornerSize="16px"
            backgroundColor="#9CEB60"
          />
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
            iconBackgroundColor={project.iconBackgroundColor} 
            iconBorderRadius="10px" // Example value for border-radius
            iconPadding="5px"
            iconHeight="50px"
          />
        ))}
      </Carousel>
      </section>
    </div>
  )
}

export default ProjectsSection ;