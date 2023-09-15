import React from "react";
import SampleImg3 from "../assets/sample_img3.jpg";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input
          type="text"
          className="contact-form-text"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="contact-form-text"
          placeholder="Your E-mail"
        />
        <input
          type="text"
          className="contact-form-text"
          placeholder="Your Phone Number"
        />
        <textarea
          className="contact-form-text"
          placeholder="Your Message"></textarea>
        <input
          type="submit"
          className="contact-form-btn"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Contact;
