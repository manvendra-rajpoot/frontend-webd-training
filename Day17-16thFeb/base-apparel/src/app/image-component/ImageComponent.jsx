import React from 'react';
import './ImageComponent.css';
import heroDesktop from '../../assets/images/hero-desktop.jpg';

const ImageComponent = () => {
  return (
    <div className='heroImg'>
        <img src={heroDesktop} alt="hero" />
    </div>
  )
}

export default ImageComponent;