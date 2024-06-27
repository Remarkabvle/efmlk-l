import React from 'react';
import './HeroSection.scss';
import banner from '../../assets/banner.png'; 

const HeroSection = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${banner})` }}>
      <div className="hero-text container">
        <h1>Super Flash Sale <br /> 50% Off</h1>
      </div>
    </div>
  );
};

export default HeroSection;
