import React from "react";
import MobilePhone from "../mobile-phone/MobilePhone";
import PhoneLinkButton from "../phone-link-buttons/PhoneLinkButton";
import "./phone-container.css";

const PhoneContainer = () => {
  return (
    <div className="phone-container-component">
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>
      <MobilePhone/>
      
   
    </div>
  );
};

export default PhoneContainer;
