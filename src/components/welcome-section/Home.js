import React from 'react';
import './home.css'; // Importa los estilos Sass de la sección Home
import Image from '../image/Image';
import WelcomeYear from '../home-date/WelcomeYear';


const Home = () => {
    return (
        <div className="home-section" id="home-section">
            <div className="home-section-container">
            <Image className="logo-pao-design" src="/logo-pao.svg"  alt="welcome logo"/>
            <Image className="logo-pao-design-mobile" src="/mobile-log.svg"  alt="welcome logo mobile"/>

            <Image id="welcome-title"  className="welcome-title" src="/welcome-title.svg"  alt="welcome title"/>
            <Image className="welcome-tag" src="/welcome-tag.svg"  alt="welcome tag"/>
            </div>
            <WelcomeYear/>
        </div>
    );
}

export default Home;
