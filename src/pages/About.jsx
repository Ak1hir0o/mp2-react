import React from "react";
import SampleImg from "../assets/sample_img.jpg";
import SampleImg2 from "../assets/sample_img_2.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="main">
          <img src={SampleImg} alt="" />
          <div className="about-text">
            <h1>About Us</h1>
            <h5>Our Mission</h5>
            <p>
              At Foodie, we are dedicated to celebrating the world's diverse
              culinary traditions and connecting food enthusiasts with the
              flavors and stories that make every bite an unforgettable
              experience. Our mission is to inspire and empower people to
              explore, appreciate, and savor the rich tapestry of global
              cuisine.
            </p>
          </div>
        </div>
        <div className="main">
          <div className="about-text">
            <h5>Our Story</h5>
            <p>
              Founded in 2023, Foodie emerged from a shared love for food and a
              desire to share that passion with the world. What started as a
              humble blog has evolved into a thriving community of food lovers,
              chefs, and artisans who believe that food is more than sustenance;
              it's an art form, a cultural touchstone, and a source of endless
              fascination.
            </p>
          </div>
          <img src={SampleImg2} className="img2" alt="" />
        </div>
      </section>
    </>
  );
};

export default About;
