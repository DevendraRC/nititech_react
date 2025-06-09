import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("Error sending message.");
      console.error(err);
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Phone:</strong> 📞 +91 8149615561</p>
          <p><strong>Email:</strong> ✉️ hr@nititechnologiesindia.in</p>
          <p><strong></strong>            ✉️ info@nititechnologiesindia.in</p>
          <p><strong>Address:</strong><br />
            📍 Riviresa Society, Baner, Pune, Maharashtra 411045.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
