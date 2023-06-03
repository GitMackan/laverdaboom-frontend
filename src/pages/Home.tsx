import { assetUrl } from "../assets/constants";
import HeroSection from "../components/HeroSection/HeroSection";
import { Parallax } from "react-scroll-parallax";
import "./Home.scss";
import { FiAward } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

const Home = () => {
  const location = useLocation();
  const newsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (newsRef.current && location.hash === "#news") {
      const offSet = -170;
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
                  <img src="https://laverdaboom.s3.eu-north-1.amazonaws.com/uploads/dog-paw.png" />
                </div>
                <h2 className="card-heading">Vilka är vi?</h2>
              </div>
              <p>
                Laverdabooms kennel är en liten kennel som föder upp trevliga
                och sunda hundar i hemmamiljö. Kenneln registrerades 2015 och
                2016 fick vi vår första kull med långhåriga Standardtaxar. Vi
                som äger kenneln är Sandra och min mamma Rosa. På fritiden ägnar
                vi mycket tid till våra hundar och familjen. Rallylydnad,
                Utställning och viltspår är något vi gillar att aktivera våra
                hundar med. Vi Strävar efter att avla friska och trevliga hundar
                och lägger stor vikt i att hitta de perfekta hemmen till våra
                valpar.
              </p>
            </div>
            <div className="news-right">
              <img src={`${assetUrl}laverdaboom.jpeg`} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="puppie-container">
          <h2 className="puppie-heading">Våra senaste tillskott</h2>
          <div className="puppie-news">
            <div className="puppie-card">
              <h3>Ginny</h3>
              <img src="./images/valp1.jpeg" alt="" />
            </div>
            <div className="puppie-card">
              <h3>Luna</h3>
              <img src="./images/valp2.jpeg" alt="" />
            </div>
            <div className="puppie-card">
              <h3>Madicken</h3>
              <img src="./images/valp3.jpeg" alt="" />
            </div>
            <div className="puppie-card">
              <h3>Mio</h3>
              <img src="./images/valp4.jpeg" alt="" />
            </div>
          </div>
        </div> */}
        <div className="upcoming-puppies">
          <div className="right">
            <img src={`${assetUrl}Sarek.jpg`} />
            <img src={`${assetUrl}skrallan.jpg`} />
          </div>
          <div className="left">
            <h2>Planerad valpkull</h2>
            <p>
              Planerad kull på Kennel Laverdaboom. Efter lyckade parningar
              håller vi nu tummarna för en kull på kenneln i Juli.
            </p>
            <div className="dog-paragraph">
              <BsGenderMale size={40} className={"gender-icon"} />
              <p>
                <b>Sire:</b>: SE U(V)CH SE VCH RLD F RLD N Yxtanejdens Sarek
                (Örnbergets Boomerang x Yxtanejdens Octavia) Öga UA IVDD K0
                BPH-Genomförd.
              </p>
            </div>
            <div className="dog-paragraph">
              <BsGenderFemale size={40} className={"gender-icon"} />
              <p>
                <b>Dam:</b> Laverdabooms Skrållan ( Red Top's Tiger Of Sweden x
                Laverdabooms My Little Pinkie Pie) CERT CKx2 Öga UA
                Bph-Genomförd
              </p>
            </div>
            <p>
              Tack Mlin Sundqvist för att jag fått låna din underbara Sarek &
              tack Kim Thuner för förtroendet med Skrållan.
            </p>
            <a>Läs mer om våra valpar här</a>
          </div>
        </div>
        {/* <div className="presentation-wrapper">
          <div className="presentation-container">
            <div className="presentation-left">
              <img src={`${assetUrl}utstallning-surahammar.jpg`} />
            </div>
            <div className="presentation-right">
              <h2 className="about-card-heading">Nyheter</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                tenetur expedita voluptates voluptate sunt labore maxime dolorem
                excepturi ab nemo?
                <br />
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sint et, eveniet nesciunt quidem nostrum quos earum labore
                asperiores nobis quo, excepturi esse perferendis natus ad
                temporibus saepe. Fuga unde aliquid officiis esse sit, nisi ab!
                Quia nisi distinctio molestias eveniet.
              </p>
            </div>
          </div>
          <div className="presentation-second">
            <h3>Dalarnas Taxklubb Nyhammar</h3>
            <p>3/30/2023</p>
            <div className="presentation-list">
              <p>
                Judge: <span>Martin Johansson</span>
              </p>
              <ul>
                <li>
                  <FiAward size={30} />
                  <p>Huntaks Onyx BOB CAC</p>
                </li>
                <li>
                  <FiAward size={30} />
                  <p>Laverdabooms Luna Lovegood BOS CAC</p>
                </li>
                <li>
                  <FiAward size={30} />
                  <p>
                    Laverdabooms Ginny Weasley BT-2 Res-CAC (Owner: Lotta
                    Wennberg)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <div className="partners-container">
          <div className="partner">
            <img src={`${assetUrl}k9-comp-logo.png`} />
          </div>
          <div className="partner">
            <img src={`${assetUrl}buddy-logo.png`} />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
