import React from "react";
import "./phone-header-pao.css";

const PhoneHeaderPao = ({ iconSrc, text, title }) => {
  return (
    <div className="header-pao">
      <img src="./phone-header-img.svg" alt="icon" className="phone-header-img" />
      <div className="header-text-container">
        <p className="comic-button__text">Paola Medina</p>
        <p className="comic-button__text"> Ux Designer </p>
      </div>
    </div>
  );
};

export default PhoneHeaderPao;
