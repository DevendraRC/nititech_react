import React from 'react';
import '../styles/ContentWithHeroImage.css';
import YourImage from '../assets/client.jpg';

const ContentWithHeroImage = () => {
  return (
    <div className="section-container">
      <div className="text-content">
        <h2 className="section-title">Our clients</h2>
        <p className="section-paragraph">
          At Niti Technologies, we are proud to partner with a diverse range of clients across various industries. Our clientele includes leading businesses in finance, healthcare, retail, and technology, all seeking innovative IT solutions. We build strong, long-lasting relationships by delivering exceptional results tailored to each client's unique needs. Our commitment to excellence and client satisfaction drives our success and reputation. Join our growing list of satisfied clients and experience the Niti Technologies difference.
        </p>
      </div>

      <img
        src={YourImage}
        alt="hero-image"
        className="section-image"
      />
    </div>
  );
};

export default ContentWithHeroImage;
