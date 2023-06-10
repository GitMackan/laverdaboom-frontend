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
            <a href="mailto:sandrabrannstrom@hotmail.se">
              sandrabrannstrom@hotmail.com
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
            <a href="mailto:sandrabrannstrom@hotmail.se">
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
      {/* <div className="partners">
        Våra samarbetspartners
        <div className="partners-container">
          <div className="partner">
            <img src={`${assetUrl}buddy-logo.png`} />
          </div>
          <div className="partner">
            <img src={`${assetUrl}k9-comp-logo.png`} alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;

{
  /* <div className="card">
          <div className="box">
            <Reveal align="center">
              <p className="contact-name">Sandra Brännström</p>
            </Reveal>
          </div>
          <div className="box">
            <Reveal align="center">
              <p>Sigfrid Edströms Gata 25B</p>
            </Reveal>
            <Reveal align="center">
              <p>724 84 Västerås</p>
            </Reveal>
            <Reveal align="center">
              <a href="mailto:sandrabrannstrom@hotmail.se">
                rosajohansson@hotmail.se
              </a>
            </Reveal>
            <Reveal>
              <div className="socials">
                <div>
                  <FaFacebook color="#4267B2" />
                </div>

                <div>
                  <FaInstagram color="purple" />
                </div>
              </div>
            </Reveal>
          </div>
          <div
            className="circle"
            style={{
              backgroundImage: ` url("https://laverdaboom.s3.eu-north-1.amazonaws.com/uploads/sandra.jpeg")`,
            }}
          ></div>
        </div>
        <div className="card">
          <div className="box">
            <Reveal align="center">
              <p className="contact-name">Rosa Johansson</p>
            </Reveal>
          </div>
          <div className="box">
            <Reveal align="center">
              <p>Tunnbrödsvägen 3</p>
            </Reveal>
            <Reveal align="center">
              <p>724 84 Västerås</p>
            </Reveal>
            <Reveal align="center">
              <a href="mailto:sandrabrannstrom@hotmail.se">
                rosajohansson@hotmail.se
              </a>
            </Reveal>
            <Reveal>
              <div className="socials">
                <div>
                  <FaFacebook color="	#4267B2" />
                </div>

                <div>
                  <FaInstagram color="purple" />
                </div>
              </div>
            </Reveal>
          </div>
          <div
            className="circle"
            style={{
              backgroundImage: ` url("https://laverdaboom.s3.eu-north-1.amazonaws.com/uploads/rosa.jpeg")`,
            }}
          ></div>
        </div> */
}
{
  /* <div className="contact-info">
          <Reveal>
            <div className="footer-img-container">
              <img src={`${assetUrl}rosa.jpeg`} />
            </div>
          </Reveal>
          <Reveal align="center">
            <p className="contact-name">Rosa Johansson</p>
          </Reveal>
          <Reveal align="center">
            <p>Tunnbrödsvägen 3</p>
          </Reveal>
          <Reveal align="center">
            <p>724 84 Västerås</p>
          </Reveal>
          <Reveal align="center">
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
        </div> */
}
