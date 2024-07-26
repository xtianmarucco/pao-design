import React from "react";
import "./mobile-phone.css";
import PhoneHeaderPao from "../phone-header-pao/PhoneHeaderPao";

import PhoneButton from "../phone-button/PhoneButton";
import PhoneLinkButton from "../phone-link-buttons/PhoneLinkButton";
import Image from "../image/Image";
import PhoneButtonDownload from "../phone-button/PhoneButtonDownload";

const MobilePhone = () => {
  return (
    <div className="mobile-phone">
      <div className="screen">
        <Image src="./status-bar.svg" className="statusbar"/>

        <PhoneHeaderPao />
        <PhoneLinkButton iconSrc="./whatsapp-icon.svg" text="+61416722863" 
        linkUrl="https://wa.me/61416722863"
        />
        <PhoneLinkButton
          iconSrc="./envelope-icon.svg"
          text="paola.design@gmail.com"
          linkUrl="mailto:paolamedina.designer@gmail.com"
        />
        <PhoneLinkButton
          iconSrc="./linkedin-icon.svg"
          text="/pao-design"
          linkUrl="https://www.linkedin.com/in/pao-design/"
        />
        <PhoneLinkButton
          iconSrc="./github-icon.svg"
          text="/pao-design"
          linkUrl="https://github.com/paodesign"
        />
        <PhoneLinkButton
          iconSrc="./location-icon.svg"
          text="Sidney, Australia"
        />
         <div className="phone-buttons-container">
        <PhoneButtonDownload
        className="first-button"
        filePath="./pao-cv.pdf"
        fileName="./pao-cv.pdf"
        iconSrc="./cv-download-icon.svg"        
        />
        <PhoneButton iconSrc="./phone-icon-mobile.svg"
        phoneNumber="+61416722863"
        />
      </div>
      </div>
    </div>
  );
};

export default MobilePhone;
