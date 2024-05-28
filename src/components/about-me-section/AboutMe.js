import React from "react";
import "./about-me.scss";
import SectionTitle from "../section-title/SectionTitle";
import TextBox from "../text-box/TextBox";
import content from "../../data/content.json";
import Image from "../image/Image";

const AboutMe = () => {
  return (
    <div id="about-me-section" className="about-me-section">
      <SectionTitle
        title="About me"
        classNameImg="about-me-icon"
        imgSrc="/about-me-icon.svg"
        classNameTitle="about-me-title"
        borderWidth={3}
        borderColor="black"
        borderRadius="35px"
        cornerSize="16px"
        backgroundColor="#4ACFFF"
     
      />
    
      <div className="parent">
      <Image
          className="about-photo"
          src="/about-photo.svg"
          alt="welcome logo"
        />
        <Image className="about-personal" src="/about-personal.png" />
        <TextBox text={content.aboutMeText} />
      </div>
    </div>
  );
};

export default AboutMe;
