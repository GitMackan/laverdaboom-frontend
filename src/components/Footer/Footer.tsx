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
          <Reveal align="center">
            <p className="contact-name">Sandra Brännström</p>
          </Reveal>
          <Reveal align="center">
            <p>Sigfrid Edströms Gata 25B</p>
          </Reveal>
          <Reveal align="center">
            <p>724 66 Västerås</p>
          </Reveal>
          <Reveal align="center">
            <a href="mailto:sandra.brannstrom@hotmail.se">
              sandra.brannstrom@hotmail.com
            </a>
          </Reveal>
          <Reveal>
            <div className="social">
              <div className="facebook">
                <FaFacebook
                  color="white"
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/profile.php?id=100008493274506",
                      "_blank"
                    );
                  }}
                />
              </div>

              <div className="instagram">
                <FaInstagram
                  color="white"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/sandra_kennellaverdaboom/",
                      "_blank"
                    );
                  }}
                />
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
          <Reveal align="center">
            <p className="contact-name">Rosa Johanssons</p>
          </Reveal>
          <Reveal align="center">
            <p>Tunnbrödsvägen 3</p>
          </Reveal>
          <Reveal align="center">
            <p>724 84 Västerås</p>
          </Reveal>
          <Reveal align="center">
            <a href="mailto:rosajohansson@hotmail.se">
              rosajohansson@hotmail.se
            </a>
          </Reveal>
          <Reveal>
            <div className="social">
              <div className="facebook">
                <FaFacebook
                  color="white"
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/rosa.johansson.5",
                      "_blank"
                    );
                  }}
                />
              </div>

              <div className="instagram">
                <FaInstagram
                  color="white"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/rosaajohansson/",
                      "_blank"
                    );
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <p className="copyright"> © 2023 Kennel Laverdaboom</p>
    </div>
  );
};

export default Footer;
