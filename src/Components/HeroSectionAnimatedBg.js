// src/components/HeroSectionAnimatedBg.js
import { Link } from 'react-router-dom';
import '../styles/HeroSectionAnimatedBg.css';

function HeroSectionAnimatedBg() {
  return (
    <div className="hero-animated-bg">
      <div className="hero-content">
        <h1>Welcome to Our Creative Space</h1>
        <p>We bring your visions to life with stunning design and technology.</p>
        <Link to="/contact">
          <button className="contact-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSectionAnimatedBg;
