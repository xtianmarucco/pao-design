import React from 'react';
import './logo.scss'; // Importa los estilos Sass de la sección Home

const Logo = ({ src, alt }) => {
    return (
        <>
            <img src={src} alt={alt}/>
        </>
    );
}

export default Logo;
