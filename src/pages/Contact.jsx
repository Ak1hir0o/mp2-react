import React from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import "../styles/Contact.css";

const Contact = () => {
  // State variables for form validation and success/error messages
  const [validated, setValidated] =
    useState(false);
  const [showSuccess, setShowSuccess] =
    useState(false);
  const [showError, setShowError] =
    useState(false);

  // Custom validation function for the phone number input
  const validatePhoneNumber = (value) => {
    const phoneNumberRegex = /^(\+?63|0)9\d{9}$/; // Philippine phone number format regex
    return phoneNumberRegex.test(value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setShowError(true);
    } else {
      setShowSuccess(true);
    }

    setValidated(true);
  };

  return (
    <Container className="contact-section">
      <h1>Contact Us</h1>
      {showSuccess && (
        <Alert
          variant="success"
          onClose={() => setShowSuccess(false)}
          dismissible>
          Form submitted successfully! We'll get
          back to you soon.
        </Alert>
      )}
      {showError && (
        <Alert
          variant="danger"
          onClose={() => setShowError(false)}
          dismissible>
          Please fill in all the required fields
          correctly.
        </Alert>
      )}
      <Row>
        <Col>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="contact-form">
            {/* Name input */}
            <Form.Control
              required
              type="text"
              className="contact-form-text"
              placeholder="Your Name"
            />

            {/* Email input */}
            <Form.Control
              required
              type="email"
              className="contact-form-text"
              placeholder="Your E-mail"
            />

            {/* Phone number input */}
            <Form.Control
              required
              type="tel"
              pattern="[0-9]{1,12}"
              maxLength={12}
              className="contact-form-text"
              placeholder="Your Phone Number"
              onChange={(e) => {
                const isValid =
                  validatePhoneNumber(
                    e.target.value
                  );
                e.target.setCustomValidity(
                  isValid
                    ? ""
                    : "Please enter a valid Philippine phone number"
                );
              }}
            />

            {/* Message input */}
            <Form.Control
              required
              as="textarea"
              className="contact-form-text"
              placeholder="Your Message"
            />

            {/* Submit button */}
            <Button
              type="submit"
              className="contact-form-btn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
