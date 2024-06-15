import React from 'react';
import './sidebar-navigation.css';

const SidebarNavigation = ({ activeSection }) => {
  const buttons = [
    { imgSrc: '/welcome-menu-about.svg', alt: 'About', section: 'about' },
    { imgSrc: '/welcome-item-cv.svg', alt: 'CV', section: 'cv' },
    { imgSrc: '/welcome-item-portfolio.svg', alt: 'Portfolio', section: 'portfolio' },
    { imgSrc: '/welcome-item-contact.svg', alt: 'Contact', section: 'contact' },
  ];

  const handleNavigation = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sidebar-navigation">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`nav-button ${activeSection === button.section ? 'active' : ''}`}
          onClick={() => handleNavigation(button.section)}
        >
          <img src={button.imgSrc} alt={button.alt} className="nav-icon" />
        </button>
      ))}
    
    </div>
  );
};

export default SidebarNavigation;
