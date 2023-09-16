import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsInstagram /> <BsTwitter />
        <BsFacebook />
      </div>
      <p> &copy; Copyright 2022</p>
    </div>
  );
};

export default Footer;
