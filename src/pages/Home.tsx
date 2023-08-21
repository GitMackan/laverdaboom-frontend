import { assetUrl } from "../assets/constants";
import HeroSection from "../components/HeroSection/HeroSection";
import { Parallax } from "react-scroll-parallax";
import "./Home.scss";
import { FiAward } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { useWindowSize } from "../utility/useWindowSize";
import Reveal from "../components/Animation.tsx/Reveal";
import axios from "axios";
import ImageFlipAnimation from "../components/Animation.tsx/ImageFlipAnimation";
import { useInView } from "framer-motion";

const Home = () => {
  const screenWidth = useWindowSize().width;
  const location = useLocation();
  const newsRef = useRef<HTMLDivElement>(null);
  // const imageRef = useRef<HTMLDivElement>(null);
  // const imageInView = useInView(imageRef);
  // const [scroll, setScroll] = useState<any>();

  // console.log(scroll);

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY; // => scroll position
  //   setScroll(scrollPosition / 10);
  // };
  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    if (newsRef.current && location.hash === "#news") {
      const offSet = screenWidth && screenWidth > 1500 ? -125 : -125;
      const y =
        newsRef.current?.getBoundingClientRect().top +
        window.pageYOffset +
        offSet;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <>
      <HeroSection />
      <div className="home-wrapper">
        <div className="news-container" id="news">
          <div className="news" id="news" ref={newsRef}>
            <div className="news-left">
              <div className="card-heading-container">
                <div className="dog-paw">
                  <Reveal>
                    <img src="https://laverdaboom.s3.eu-north-1.amazonaws.com/uploads/dog-paw.png" />
                  </Reveal>
                </div>
                <Reveal>
                  <h2 className="card-heading">Vilka är vi?</h2>
                </Reveal>
              </div>
              <Reveal>
                <p>
                  Laverdabooms kennel är en liten kennel som föder upp trevliga
                  och sunda hundar i hemmamiljö. Kenneln registrerades 2015 och
                  2016 fick vi vår första kull med långhåriga Standardtaxar. Vi
                  som äger kenneln är Sandra och min mamma Rosa. På fritiden
                  ägnar vi mycket tid till våra hundar och familjen.
                  Rallylydnad, Utställning och viltspår är något vi gillar att
                  aktivera våra hundar med. Vi Strävar efter att avla friska och
                  trevliga hundar och lägger stor vikt i att hitta de perfekta
                  hemmen till våra valpar.
                </p>
              </Reveal>
            </div>
            <div className="news-right">
              <Reveal>
                <img src={`${assetUrl}laverdaboom.jpeg`} alt="" />
              </Reveal>
            </div>
          </div>
        </div>

        <div className="upcoming-puppies-wrapper">
          <div className="upcoming-puppies">
            <div className="right">
              <Reveal>
                <img src={`${assetUrl}Sarek.jpg`} />
              </Reveal>
              <Reveal>
                <img src={`${assetUrl}skrallan.jpg`} />
              </Reveal>
            </div>

            <div className="left">
              <Reveal>
                <h2>Aktuell valpkull</h2>
              </Reveal>
              <Reveal>
                <h3>Glada nyheter från Laverdaboom!</h3>
              </Reveal>

              <Reveal>
                <p>
                  2023-07-21 föddes 5 välmående valpar på kenneln. Två tikar och
                  tre hanar. Ännu finns en otingad hane som letar efter ett
                  framtida hem.
                </p>
              </Reveal>
              <div className="dog-paragraph">
                <Reveal width="fit-content">
                  <BsGenderMale size={40} className={"gender-icon"} />
                </Reveal>
                <Reveal>
                  <p>
                    <b>Sire:</b> SE U(V)CH SE VCH RLD F RLD N Yxtanejdens Sarek
                    (Örnbergets Boomerang x Yxtanejdens Octavia) Öga UA IVDD K0
                    BPH-Genomförd.
                  </p>
                </Reveal>
              </div>
              <div className="dog-paragraph">
                <Reveal width="fit-content">
                  <BsGenderFemale size={40} className={"gender-icon"} />
                </Reveal>
                <Reveal>
                  <p>
                    <b>Dam:</b> Laverdabooms Skrållan ( Red Top's Tiger Of
                    Sweden x Laverdabooms My Little Pinkie Pie) CERT CKx2 Öga UA
                    Bph-Genomförd
                  </p>
                </Reveal>
              </div>
              <Reveal>
                <p>
                  Tack Mlin Sundqvist för att jag fått låna din underbara Sarek
                  & tack Kim Thuner för förtroendet med Skrållan.
                </p>
              </Reveal>
              <Reveal align="center">
                <Link to={"/puppies"}>Läs mer om våra valpar här</Link>
              </Reveal>
            </div>
          </div>
        </div>
        <div
          className="testContainer"
          // ref={imageRef}
          // style={{ transform: `rotateX(-${scroll}deg)` }}
        >
          {/* <ImageFlipAnimation> */}
          <img
            className="testImg"
            // style={{ transform: `rotateX(${})` }}
            src={`${assetUrl}laverdaboom.jpeg`}
            alt=""
          />
          {/* </ImageFlipAnimation> */}
        </div>
      </div>
    </>
  );
};

export default Home;
