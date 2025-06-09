import React from 'react';
import YourImage from '../assets/life.png'; // replace with your image path
import '../styles/FeatureSection.css';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <h2 className="feature-title">Why Choose Us</h2>
     
      <p className="feature-paragraph">
        Choose Niti Technologies for our commitment to excellence and innovation.
        Our team of experts delivers customized IT solutions that align with your business goals,
        ensuring superior quality and performance. We leverage the latest technologies and best practices
        to provide scalable, secure, and efficient services. Our client-centric approach guarantees
        personalized support and timely delivery, helping you achieve success.
      </p>
      <img
        src={YourImage}
        alt="Why Choose Us"
        className="feature-big-image"
      />
    </div>
  );
};

export default FeatureSection;
