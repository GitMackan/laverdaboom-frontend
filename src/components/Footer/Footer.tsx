import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { assetUrl } from "../../assets/constants";
import Reveal from "../Animation.tsx/Reveal";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <Reveal>
            <div className="footer-img-container">
              <img src={`${assetUrl}sandra.jpeg`} />
            </div>
          </Reveal>
          <Reveal>
            <p className="contact-name">Sandra Brännström</p>
          </Reveal>
          <Reveal>
            <p>Sigfrid Edströms Gata 25B</p>
          </Reveal>
          <Reveal>
            <p>724 66 Västerås</p>
          </Reveal>
          <Reveal>
            <a href="mailto:sandrabrannstrom@hotmail.se">
              sandrabrannstrom@hotmail.com
            </a>
          </Reveal>
          <Reveal>
            <div className="social">
              <div className="facebook">
                <FaFacebook color="white" />
              </div>

              <div className="instagram">
                <FaInstagram color="white" />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="contact-info">
          <Reveal>
            <div className="footer-img-container">
              <img src={`${assetUrl}rosa.jpeg`} />
            </div>
          </Reveal>
          <Reveal>
            <p className="contact-name">Rosa Johansson</p>
          </Reveal>
          <Reveal>
            <p>Tunnbrödsvägen 3</p>
          </Reveal>
          <Reveal>
            <p>724 84 Västerås</p>
          </Reveal>
          <Reveal>
            <a href="mailto:sandrabrannstrom@hotmail.se">
              rosajohansson@hotmail.se
            </a>
          </Reveal>
          <Reveal>
            <div className="social">
              <div className="facebook">
                <FaFacebook color="white" />
              </div>

              <div className="instagram">
                <FaInstagram color="white" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Footer;
