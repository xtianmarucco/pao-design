import React from "react";
import "./contact-section.scss";
import SectionTitle from "../section-title/SectionTitle";
import TextBox from "../text-box/TextBox";
import content from "../../data/content.json";
import ContactStickyNote from "../contact-sticky-note/ContactStickyNote";
import MobilePhone from "../mobile-phone/MobilePhone";
// import SynopticChart from '../synoptic-chart/SynopticChart';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-section-container">
        <div className="item" id="item1">
          <SectionTitle
            title="Contact"
            classNameImg="about-me-icon"
            imgSrc="/contact-icon.svg"
            classNameTitle="about-me-title"
            width="auto"
            height="100px"
            borderWidth={3}
            borderColor="black"
            borderRadius="35px"
            cornerSize="16px"
            backgroundColor="#FFDE2E"
            maxWidth="600PX"
          />
          <TextBox text={content.contactText} />
          <ContactStickyNote
            imageSrc="/pin-contact.svg"
            classNamePin="pin-img"
            text={content.stickyNoteText}
            footerText={content.contactText}
          />
        </div>
        <div className="item" id="item4">
          <MobilePhone/>
        </div>
        {/* <div className="item" id="item2">
        </div>
        <div className="item" id="item3">
        </div> */}
      
      </div>

      {/* <SynopticChart></SynopticChart> */}
    </div>
  );
};

export default ContactSection;
