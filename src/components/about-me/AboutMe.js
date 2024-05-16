import React from 'react'
import './about-me.scss'
import SectionTitle from '../section-title/SectionTitle';

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <SectionTitle
        title="About me"
        classNameImg="about-me-icon"
        imgSrc="/about-me-icon.svg"
        classNameTitle="about-me-title"
        width="600px"
        height="100px"
        borderWidth={3}
        borderColor="black"
        borderRadius="35px"
        cornerSize="16px"
        backgroundColor="#4ACFFF"
      />
    </div>
  );
}

export default AboutMe;