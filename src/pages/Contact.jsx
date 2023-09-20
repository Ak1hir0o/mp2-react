import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Contact.css";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container className="contact-section">
      <h1>Contact Us</h1>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <Row>
          <Col>
            <Form.Control
              required
              type="text"
              className="contact-form-text"
              placeholder="Your Name"
            />
            <Form.Control
              required
              type="email"
              className="contact-form-text"
              placeholder="Your E-mail"
            />
            <Form.Control
              required
              type="number"
              className="contact-form-text"
              placeholder="Your Phone Number"
            />
            <Form.Control
              required
              as="textarea"
              className="contact-form-text"
              placeholder="Your Message"
            />
            <Button type="submit" className="contact-form-btn">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Contact;
