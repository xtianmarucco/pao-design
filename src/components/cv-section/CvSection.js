import React from "react";
import SectionTitle from "../section-title/SectionTitle";
import TextBox from "../text-box/TextBox";
import Image from "../image/Image";
import content from "../../data/content.json";
import "./cv-section.scss";
import ComicButton from "../comic-button/ComicButton";

const CvSection = () => {
  return (
    <div className="cv-section">
      <div className="cv-section-container">
        <div className="item yellow small">
          <SectionTitle
            title="Curriculum Vitae"
            imgSrc="/cv-icon.svg"
            borderWidth={3}
            borderColor="black"
            borderRadius="35px"
            cornerSize="18px"
            backgroundColor="#FC77FF"
          />
        </div>
        <div className="item yellow large">
          <TextBox text={content.cvText} />
        </div>
        <div className="item blue">
        <div className="cv-section-button-container">
            <ComicButton iconSrc="./download-icon-btn.svg" text="Donwload me" />
            <ComicButton iconSrc="./scan-fill-icon.svg" text="Scan me" />
          </div>
          <Image className="download-qr" src="./qr-cv.svg" />
        
        </div>
        <div className="item red">
        <Image className="cv-skils" src="./cv-skills.svg" />
        </div>
      </div>
    </div>
  );
};
export default CvSection;
