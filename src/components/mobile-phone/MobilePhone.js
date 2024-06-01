import React from 'react';
import './mobile-phone.css'; 
import PhoneButton from '../phone-button/PhoneButton';
import PhoneLinkButton from '../phone-link-buttons/PhoneLinkButton';

const MobilePhone = ({ screenContent }) => {
  return (
    <div className="mobile-phone">
      <div className="screen">
        <br></br>
        <PhoneLinkButton iconSrc='/envelope-icon.svg' text='Scan me' />
        <br></br>
        <PhoneLinkButton iconSrc='/scan-fill-icon.svg' text='Scan me' />
        <br></br>
        <PhoneLinkButton iconSrc='/scan-fill-icon.svg' text='Scan me' />
        <br></br>
        <PhoneLinkButton iconSrc='/whatsapp-icon.svg' text='Scan me' />
        <br></br>
        <PhoneLinkButton iconSrc='/location-icon.svg' text='Scan me' />
      </div>
      <div className="bottom-bar">
        <PhoneButton iconSrc='/download-icon-btn.svg' buttonText='Download'/>
        <br></br>
        <PhoneButton iconSrc='/icon-phone-fill.svg' buttonText='Calling'/>
      </div>
    </div>
  );
};

export default MobilePhone;
