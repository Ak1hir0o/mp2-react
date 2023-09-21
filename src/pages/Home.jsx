import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../assets/landing_img.jpg";
import "../styles/Home.css";

const Home = () => {
  //render the home component
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${LandingImg})`,
      }}>
      {/*Header*/}
      <div className="headerContainer">
        <h1> FOODIE </h1>
        <p>
          Let's make every meal an adventure!,{" "}
          <br /> Taste the world with Foodie
          today!
        </p>
        {/*Link to recipe page*/}
        <Link to="/recipes">
          <button> Search Recipes </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
