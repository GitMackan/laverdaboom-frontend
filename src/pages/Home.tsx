import { assetUrl } from "../assets/constants";
import HeroSection from "../components/HeroSection/HeroSection";
import { Parallax } from "react-scroll-parallax";
import "./Home.scss";
import { FiAward } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { useWindowSize } from "../utility/useWindowSize";
import Reveal from "../components/Animation.tsx/Reveal";

const Home = () => {
  const screenWidth = useWindowSize().width;
  const location = useLocation();
  const newsRef = useRef<HTMLDivElement>(null);

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
                <h2>Planerad valpkull</h2>
              </Reveal>
              <Reveal>
                <p>
                  Planerad kull på Kennel Laverdaboom. Efter lyckade parningar
                  håller vi nu tummarna för en kull på kenneln i Juli.
                </p>
              </Reveal>
              <div className="dog-paragraph">
                <Reveal>
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
                <Reveal>
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
              <Reveal>
                <Link to={"/puppies"}>Läs mer om våra valpar här</Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
