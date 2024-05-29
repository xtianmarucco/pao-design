import React from 'react';
import './contact-sticky-note.css'; // Importa los estilos CSS del componente

const ContactStickyNote = ({ imageSrc, text, footerText, classNamePin }) => {
  return (
    <div className="contact-sticky-note">
      <div className="image-container">
        <img src={imageSrc} className={classNamePin} alt="Imagen" />
      </div>
      <div className="text-container">{text}</div>
      <div className="footer-container">{footerText}</div>
    </div>
  );
};

export default ContactStickyNote;
