import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon />
        <FacebookIcon />
      </div>
      <p> &copy; Copyright 2022</p>
    </div>
  );
};

export default Footer;
