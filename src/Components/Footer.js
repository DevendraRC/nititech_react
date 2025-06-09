import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo.png';

const CustomFooter = () => {
  return (
    <footer className="custom-footer">

     
      <div className="footer-strip">
        <p>Get Connect With Us:</p>
      </div>


      <div className="footer-main">
        

        <div className="footer-column left">
          <img src={logo} alt="Niti Technologies Logo" className="footer-logo" />
          <h3 className="footer-company-name">NITI TECHNOLOGIES INDIA SOFTWARE</h3>
          <hr className="footer-divider" />
          <p className="footer-description">
            Niti Technologies provides great team for your Great Business
          </p>
        </div>


        <div className="footer-column center">
          <h4 className="footer-heading">NAVIGATION</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/clients">Client</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

    
        <div className="footer-column right">
          <h4 className="footer-heading">Address</h4>
          <p>Riviresa Society, Baner, Pune, Maharashtra 411045</p>
          <p>hr@nititechnologiesindia.in</p>
          <p>info@nititechnologiesindia.in</p>
          <p>+91 8149615561</p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>©All Rights Reserved Designed By Niti Technologies</p>
      </div>

    </footer>
  );
};

export default CustomFooter;
