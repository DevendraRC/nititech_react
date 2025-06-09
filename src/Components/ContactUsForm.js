import React from 'react';
import '../styles/ContactUsForm.css';
import Contact from '../assets/contact.gif';

const ContactUsForm = () => {
  return (
    <div className="contact-us-section">
      {/* Left Side: Image */}
      <div className="contact-image">
        <img src={Contact} alt="Contact Us" />
      </div>

      {/* Right Side: Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Contact</label>
            <input type="text" placeholder="Enter your contact number" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email address" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
