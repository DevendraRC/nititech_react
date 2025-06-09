import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';
import heroRight from '../assets/hero-right.gif';
import {  useNavigate } from 'react-router-dom';



const HeroSection = () => {
  const navigate = useNavigate();

  const goToContact =() => {
    navigate('/contact');
  };
  return (
    <div className="hero-container">

      {/* <div className="particles-wrapper">
        <HeroSectionAnimatedBg />
      </div> */}

      <motion.div
        className="hero-content-row"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="hero-text">
          <h1 className="hero-title">
          Empowering Companies to Thrive through Data-Driven Excellence.
          </h1>
          <p className="hero-description">
            "Unlocking insights from data allows us to gain a deeper 
            understanding of our world, and utilizing this knowledge
             to drive positive transformations. ChiStats is a data 
             science technology company solving high-impact complex 
             problems."
          </p>
          <button className="cta-button" onClick={goToContact}>Contact us</button>
        </div>

        <div className="hero-image">
          <img src={heroRight} alt="Illustration" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
