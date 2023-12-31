import React from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import SampleImg from "../assets/sample_img.jpg";
import SampleImg2 from "../assets/sample_img2.jpg";
import "../styles/About.css";

const About = () => {
  /*
   * This component renders the About section of the website.
   * It uses the React Bootstrap library for layout and styling.
   * The section consists of two columns with text and images.
   * The text content is wrapped in divs with specific classNames for styling.
   * The images are imported from the assets directory.
   */

  return (
    <Container>
      <section className="about">
        <Row>
          <Col md={6}>
            <img src={SampleImg} alt="" />
          </Col>
          <Col md={6}>
            <div className="about-text">
              <h1>Our Story</h1>
              <h5>About Us</h5>
              <p className="text-justify">
                Founded in 2023, Foodie emerged
                from a shared love for food and a
                desire to share that passion with
                the world. What started as a
                humble blog has evolved into a
                thriving community of food lovers,
                chefs, and artisans who believe
                that food is more than sustenance;
                it's an art form, a cultural
                touchstone, and a source of
                endless fascination.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="about-text">
              <h5>Our Mission</h5>
              <p className="text-justify">
                At Foodie, we are dedicated to
                celebrating the world's diverse
                culinary traditions and connecting
                food enthusiasts with the flavors
                and stories that make every bite
                an unforgettable experience. Our
                mission is to inspire and empower
                people to explore, appreciate, and
                savor the rich tapestry of global
                cuisine.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img
              src={SampleImg2}
              className="img2"
              alt=""
            />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;
