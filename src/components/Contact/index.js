// src/components/Contact.js
import React from 'react';
import './index.css';

const Contact = () => (
  <section className="contact">
    <h2>Contact Me</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;
