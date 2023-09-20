import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsInstagram /> <BsTwitter />
        <BsFacebook />
      </div>
      <div className="quickLinks">
        <Link to="/">Home</Link>
        <Link to="/recipe">Recipe</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p> &copy; Copyright 2022</p>
    </div>
  );
};

export default Footer;
