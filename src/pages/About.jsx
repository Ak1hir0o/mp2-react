import React from "react";
import SampleImg from "../assets/sample_img.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="main">
          <img src={SampleImg} alt="" />
          <div className="about-text">
            <h1>About Us</h1>
            <h5>Dummy Title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quod doloribus aut beatae neque exercitationem delectus voluptas
              culpa nam saepe? Enim quod neque incidunt quibusdam earum ex
              veritatis similique eligendi, laboriosam, praesentium perferendis
              accusantium quae, illo quo! Aspernatur aperiam possimus ex
              corrupti saepe, sapiente repudiandae consequatur recusandae error
              voluptas nihil.
            </p>
            <button type="button" className="about-btn">
              See More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
