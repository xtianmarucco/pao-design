import React from "react";
import "./about-me.css";
import SectionTitle from "../section-title/SectionTitle";
import TextBox from "../text-box/TextBox";
import content from "../../data/content.json";
import Image from "../image/Image";

const AboutMe = () => {
  return (
    <div id="about-me-section">
      <div className="about-me-container">
        <div className="title-section-container">
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
        </div>
        <div className="about-photo-container">
          <Image
            className="about-photo"
            src="/about-photo.svg"
            alt="welcome logo"
          />
        </div>
        <div className="about-personal-container">
          <Image className="about-personal" src="/about-personal.png" />
        </div>
        <div className="text-box-container">
          <TextBox text={content.aboutMeText} />
        </div>
        <div className="about-personal-mobile-container">
          <Image
            className="about-personal-mobile"
            src="/about-personal-mobile.svg"
          />
        </div>
       
      </div>
    </div>
  );
};

export default AboutMe;
