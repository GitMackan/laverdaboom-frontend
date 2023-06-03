import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { assetUrl } from "../../assets/constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <div className="footer-img-container">
            <img src={`${assetUrl}sandra.jpeg`} />
          </div>
          <p className="contact-name">Sandra Brännström</p>
          <p>Sigfrid Edströms Gata 25B</p>
          <p>724 66 Västerås</p>
          <a href="mailto:sandrabrannstrom@hotmail.se">
            sandrabrannstrom@hotmail.se
          </a>
          <div className="social">
            <div className="facebook">
              <FaFacebook color="white" />
            </div>

            <div className="instagram">
              <FaInstagram color="white" />
            </div>
          </div>
        </div>
        <div className="contact-info">
          <div className="footer-img-container">
            <img src={`${assetUrl}rosa.jpeg`} />
          </div>
          <p className="contact-name">Rosa Johansson</p>
          <p>Tunnbrödsvägen 3</p>
          <p>724 84 Västerås</p>
          <a href="mailto:sandrabrannstrom@hotmail.se">
            rosajohansson@hotmail.se
          </a>
          <div className="social">
            <div className="facebook">
              <FaFacebook color="white" />
            </div>

            <div className="instagram">
              <FaInstagram color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
