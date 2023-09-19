import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <Container className="contact-section">
      <h1>Contact Us</h1>
      <Form className="contact-form">
        <Row>
          <Col>
            <Form.Control
              type="text"
              className="contact-form-text"
              placeholder="Your Name"
            />
          </Col>
          <Col>
            <Form.Control
              type="email"
              className="contact-form-text"
              placeholder="Your E-mail"
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              className="contact-form-text"
              placeholder="Your Phone Number"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              as="textarea"
              className="contact-form-text"
              placeholder="Your Message"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              type="submit"
              className="contact-form-btn">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Contact;
