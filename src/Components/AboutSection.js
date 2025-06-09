// src/Components/AboutSection.js
import React from 'react';
import '../styles/AboutSection.css';
import aboutscreenLeft from '../assets/about-us.gif';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutscreenLeft} alt="About visual" />
        </div>
        <div className="about-text">
        <h2 class="about-title">About us</h2>
          <p>
          At Niti Technologies, we are dedicated to empowering businesses through innovative
           and reliable IT solutions. Founded with a mission to deliver excellence, we 
           specialize in web and app development, data analytics, cloud computing, and software
            testing services. Our team of seasoned professionals brings deep industry expertise 
            and a passion for technology to every project, ensuring tailored solutions that 
            drive growth and efficiency. Committed to quality and client satisfaction, we
             leverage the latest tools and methodologies to provide scalable and secure services.
              Partner with Niti Technologies for a seamless digital transformation and a 
              competitive edge in the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
