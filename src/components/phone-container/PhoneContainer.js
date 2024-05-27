import React from 'react';
import './phone-container.scss';
import MobilePhone from "../mobile-phone/MobilePhone";


const PhoneContainer = () => {
  return (
    <div className="container-component">
          <MobilePhone></MobilePhone>
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>
    </div>
  );
};

export default PhoneContainer;