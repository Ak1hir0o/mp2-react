import React from "react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsGithub />
      </div>
      <div className="quickLinks">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipe</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p> &copy; Copyright 2023</p>
    </div>
  );
};

export default Footer;
