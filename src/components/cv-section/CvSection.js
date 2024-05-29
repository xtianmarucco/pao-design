import React from "react";
import SectionTitle from "../section-title/SectionTitle";
import TextBox from "../text-box/TextBox";
import Image from "../image/Image";
import content from "../../data/content.json";
import "./cv-section.css";
import ComicButton from "../comic-button/ComicButton";

const CvSection = () => {
  return (
    <div id="cv-section">
      <div className="cv-section-container">
        <div className="cv-title-section-container">
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
        <div className="cv-image-container">
          <div className="cv-balloon-row">
            <div className="cv-ballon-1">
              <ComicButton
                iconSrc="./download-icon-btn.svg"
                text="Download me"
              />
            </div>
            <div className="cv-balloon-2">
              <ComicButton iconSrc="./scan-fill-icon.svg" text="Scan me" />
            </div>
          </div>
          <div className="cv-envelope-container">
            <Image className="download-qr" src="./qr-cv.svg" />
          </div>
        </div>
        <div className="cv-text-box-container">
          <TextBox text={content.cvText} />
        </div>
        <div className="cv-skills-container">
          <Image className="cv-skills" src="./cv-skills.svg" />
          <Image className="cv-skills-mobile" src="./cv-skills-mobile.svg" />
        </div>
      </div>
    </div>
  );
};

export default CvSection;
