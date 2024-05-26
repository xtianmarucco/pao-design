import React from 'react';
import './mobile-phone.scss'; 
import PhoneButton from '../phone-button/PhoneButton';

const MobilePhone = ({ screenContent }) => {
  return (
    <div className="mobile-phone">
      <div className="screen">
        {screenContent}
      </div>
      <div className="bottom-bar">
        <PhoneButton iconSrc='/scan-fill-icon.svg' buttonText='Scan me'/>
        <PhoneButton iconSrc='/icon-phone-fill.svg' buttonText='Contact me'/>
      </div>
    </div>
  );
};

export default MobilePhone;
