import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../assets/landing_img.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${LandingImg})`,
      }}
    >
      <div className="headerContainer">
        <h1> FOODIE </h1>
        <p>
          Let's make every meal an adventure!, <br /> Taste the world with
          Foodie today!
        </p>
        <Link to="/recipes">
          <button> View Recipes </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
