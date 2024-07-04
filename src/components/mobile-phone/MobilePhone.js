import React from "react";
import "./mobile-phone.css";
import PhoneHeaderPao from "../phone-header-pao/PhoneHeaderPao";

import PhoneButton from "../phone-button/PhoneButton";
import PhoneLinkButton from "../phone-link-buttons/PhoneLinkButton";

const MobilePhone = () => {
  return (
    <div className="mobile-phone">
      <div className="screen">
        <PhoneHeaderPao />
        <PhoneLinkButton iconSrc="./whatsapp-icon.svg" text="+61416722863" />
        <PhoneLinkButton
          iconSrc="./envelope-icon.svg"
          text="paola.design@gmail.com"
        />
        <PhoneLinkButton
          iconSrc="./linkedin-icon.svg"
          text="/pao-design"
        />
          <PhoneLinkButton
          iconSrc="./github-icon.svg"
          text="/pao-design"
        />
          <PhoneLinkButton
          iconSrc="./location-icon.svg"
          text="Sidney, Australia"
        />
      </div>
      <div className="phone-buttons-container">
      <PhoneButton iconSrc='./cv-download-icon.svg' buttonText="Download CV" />
      <PhoneButton iconSrc='./phone-icon-mobile.svg' buttonText="Calling" />
      </div>
    </div>
  );
};

export default MobilePhone;
