import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/about-us.gif';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <img src={aboutImage} alt="About NT" className="about-banner" />
        <h1>About Niti Technologies</h1>
      </header>

      <section className="about-content">
        <h2>About Us</h2>
        <p>
        At Niti Technologies, we are dedicated to empowering businesses
         through innovative and reliable IT solutions. Founded with a
          mission to deliver excellence, we specialize in web and app 
          development, data analytics, cloud computing, and software 
          testing services. Our team of seasoned professionals brings
           deep industry expertise and a passion for technology to every
            project, ensuring tailored solutions that drive growth and 
            efficiency. Committed to quality and client satisfaction, we
             leverage the latest tools and methodologies to provide 
             scalable and secure services. Partner with Niti Technologies 
             for a seamless digital transformation and a competitive edge
              in the market.
        </p>  
    
      </section>
    </div>
  );
};

export default About;
