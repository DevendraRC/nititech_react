import React from 'react';
import '../styles/HeroImageSection.css';
import WhyChooseImage from '../assets/why-choose.gif'; // import the image

const HeroImageSection = () => {
  return (
    <div className="hero-image-section">
      <div className="hero-content">
        
      <img src={WhyChooseImage} alt="Why Choose Us" className="hero-banner-image" />
      <h1 className="hero-title">Why Choose Us</h1>
        <p className="hero-paragraph">
          Choose Niti Technologies for our commitment to excellence and innovation.
          Our team of experts delivers customized IT solutions that align with your business goals,
          ensuring superior quality and performance. We leverage the latest technologies and best practices
          to provide scalable, secure, and efficient services. Our client-centric approach guarantees
          personalized support and timely delivery, helping you achieve success. With a proven track record of
          satisfied clients, Niti Technologies is your trusted partner for reliable and transformative IT solutions.
          Experience the difference with our dedication to driving your business forward.
        </p>
      </div>
    </div>
  );
};

export default HeroImageSection;
