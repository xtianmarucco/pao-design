import React from "react";
import "./contact-section.css";
import SectionTitle from "../section-title/SectionTitle";
import TextBox from "../text-box/TextBox";
import content from "../../data/content.json";
import ContactStickyNote from "../contact-sticky-note/ContactStickyNote";
import PhoneContainer from "../phone-container/PhoneContainer";
// import SynopticChart from '../synoptic-chart/SynopticChart';

const ContactSection = () => {
  return (
    <div id="contact-section">
      <div class="contact-section-container">
        <div class="contact-title-section-container">
        <SectionTitle
            title="Contact"
            imgSrc="/contact-icon.svg"
            borderWidth={3}
            borderColor="black"
            borderRadius="35px"
            cornerSize="16px"
            backgroundColor="#FFDE2E"
          />
        </div>
        <div class="contact-phone-container">
      
        <PhoneContainer>
          hello
        </PhoneContainer>
        </div>
        <div class="contact-textbox-container">
        <TextBox text={content.contactText} />
        </div>
        <div class="contact-sticky-container">
        <ContactStickyNote
            imageSrc="/pin-contact.svg"
            classNameNamePin="pin-img"
            text={content.stickyNoteText}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
