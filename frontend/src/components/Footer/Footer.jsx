import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography className="intro">
          Hey, my name is Dipendra Singh. I am a Full-Stack Developer and You
          can check my Github Profile and <b>My Resume</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Dipendra6377" target="black">
          <BsGithub />
        </a>
        <a
          href="https://drive.google.com/file/d/1PNHDaip-MBI7htyk1O7-sC5dVtpydCzt/view?usp=sharing"
          target="black"
        >
          <RiContactsFill />
        </a>
        <a
          href="https://www.linkedin.com/in/dipendra-singh-shekhawat-88369421b/"
          target="black"
        >
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/Dipendr10444483" target="black">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
