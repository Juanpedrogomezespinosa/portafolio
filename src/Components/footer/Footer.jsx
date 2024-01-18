import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Juanpe</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/juanpedroge/"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/Juanpedrogomezespinosa"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          {" "}
          &#169; Juan Pedro Gómez. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
