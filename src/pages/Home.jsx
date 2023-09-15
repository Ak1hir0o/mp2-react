import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../assets/landing_img.jpg";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${LandingImg})`,
      }}>
      <div className="headerContainer">
        <h1> TITLE </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur,
        </p>
        <Link to="/recipes">
          <button> View Recipes </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
