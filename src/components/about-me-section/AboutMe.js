import React from "react";
import "./about-me.scss";
import SectionTitle from "../section-title/SectionTitle";
import TextBox from "../text-box/TextBox";
import content from "../../data/content.json";
import Image from "../image/Image";

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <SectionTitle
      id="about-me-section-title"
        title="About me"
        classNameImg="about-me-icon"
        imgSrc="/about-me-icon.svg"
        classNameTitle="about-me-title"
        width="auto"
        height="100px"
        borderWidth={3}
        borderColor="black"
        borderRadius="35px"
        cornerSize="16px"
        backgroundColor="#4ACFFF"
        maxWidth="600px"
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
