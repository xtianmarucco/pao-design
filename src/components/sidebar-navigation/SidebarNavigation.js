import React from 'react';
import './sidebar-navigation.scss';



const SidebarNavigation = ( ) => {

    const buttons = [
        { imgSrc: '/welcome-menu-about.svg', alt: 'Button 1' },
        { imgSrc: '/welcome-item-cv.svg', alt: 'Button 2' },
        { imgSrc: '/welcome-item-portfolio.svg', alt: 'Button 3' },
        { imgSrc: '/welcome-item-contact.svg', alt: 'Button 4' }
      ];

  return (
    <div className="sidebar-navigation">
      {buttons.map((button, index) => (
        <button key={index} className="nav-button">
          <img src={button.imgSrc} alt={button.alt} className="nav-icon" />
        </button>
      ))}
    </div>
  );
};

export default SidebarNavigation;
