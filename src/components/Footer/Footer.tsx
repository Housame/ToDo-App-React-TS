import React from "react";
import classes from "./footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.footer}>
        <h3>
          Developer <span>Housame Oueslati</span>
        </h3>
        <div className={classes.icons}>
          <a href="https://github.com/Housame" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/housame-oueslati-b1249874/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
