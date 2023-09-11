import React from "react";
import { assetUrl } from "../assets/constants";
import { FiCheck } from "react-icons/fi";
import { FaDog } from "react-icons/fa";

import "./Puppies.scss";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import Reveal from "../components/Animation.tsx/Reveal";

const Puppies = () => {
  return (
    <div className="puppies-container">
      <div className="puppies-intro">
        <div className="intro-left">
          <Reveal>
            <h2>Våra Valpar</h2>
          </Reveal>
          <Reveal>
            <p>
              Vi söker valpköpare där hunden får vara en stor del av familjen.
              Vi ser gärna att ni som valpköpare aktiverar era hundar genom
              kurser,viltspår m.m.
            </p>
          </Reveal>
          <br />
          <Reveal>
            <p>
              Hos oss finns inget speciellt kö-system utan först träffas vi och
              ser vad ni och vi har för förväntningar på den nya
              familjemedlemmen och det nya hemmet. Om allt känns bra så placerar
              vi sedan ut valparna i hem, ut efter hur vi tror och anser att de
              passar bäst.
            </p>
          </Reveal>
          <Reveal>
            <h3>Det som följer med valpen när du köper av oss är:</h3>
          </Reveal>
          <ul>
            <Reveal>
              <li>
                <div className="check-list-item">
                  <FiCheck size={18} />
                  <p>SKK's köpekontrakt </p>
                </div>
              </li>
            </Reveal>
            <Reveal>
              <li>
                <div className="check-list-item">
                  <FiCheck size={18} />
                  <p>Stamtavla </p>
                </div>
              </li>
            </Reveal>
            <Reveal>
              <li>
                <div className="check-list-item">
                  <FiCheck size={18} className="check-icon" />
                  <p>Ägaranmälan </p>
                </div>
              </li>
            </Reveal>
            <Reveal>
              <li>
                <div className="check-list-item">
                  <FiCheck size={18} className="check-icon" />
                  <p>
                    Startpaket med valpfoder (samma som valpen ätit hos oss),
                    gosedjur, godis och en filt
                  </p>
                </div>
              </li>
            </Reveal>
            <Reveal>
              <li>
                <div className="check-list-item">
                  <FiCheck size={18} />
                  <p>Informationsblad om försäkring </p>
                </div>
              </li>
            </Reveal>
          </ul>
          <Reveal>
            <h3>När valpen flyttar är den:</h3>
          </Reveal>
          <ul>
            <Reveal>
              <li>
                <div className="check-list-item">
                  <FiCheck size={18} />
                  <p>Registrerad i SKK</p>
                </div>
              </li>
            </Reveal>
            <Reveal>
              <li>
                <div className="check-list-item">
                  <FiCheck size={18} />
                  <p>Minst 8 veckor gammal</p>
                </div>
              </li>
            </Reveal>
            <Reveal>
              <li>
                <div className="check-list-item">
                  <FiCheck size={18} />
                  <p>Försäkrad i Folksam mot dolda fel</p>
                </div>
              </li>
            </Reveal>
            <Reveal>
              <li>
                <div className="check-list-item">
                  <FiCheck size={18} />
                  <p>Veterinärbesiktigade max 7 dagar innan flytt</p>
                </div>
              </li>
            </Reveal>
            <Reveal>
              <li>
                <div className="check-list-item">
                  <FiCheck size={18} />
                  <p>Vaccinerad</p>
                </div>
              </li>
            </Reveal>
            <Reveal>
              <li>
                <div className="check-list-item">
                  <FiCheck size={18} />
                  <p>ID-märkta med godkänt chip</p>
                </div>
              </li>
            </Reveal>
          </ul>
        </div>
        <div className="intro-right">
          <Reveal>
            <img src={`${assetUrl}valpar-midsommar.jpeg`} />
          </Reveal>
          <Reveal>
            <img src={`${assetUrl}valpar_cover.jpeg`} />
          </Reveal>
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
                tre hanar.
              </p>
            </Reveal>
            <Reveal>
              <div className="dog-paragraph">
                <BsGenderMale size={40} className={"gender-icon"} />
                <p>
                  <b>Sire:</b> SE U(V)CH SE VCH RLD F RLD N Yxtanejdens Sarek
                  (Örnbergets Boomerang x Yxtanejdens Octavia) Öga UA IVDD K0
                  BPH-Genomförd.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="dog-paragraph">
                <BsGenderFemale size={40} className={"gender-icon"} />
                <p>
                  <b>Dam:</b> Laverdabooms Skrållan ( Red Top's Tiger Of Sweden
                  x Laverdabooms My Little Pinkie Pie) CERT CKx2 Öga UA
                  Bph-Genomförd
                </p>
              </div>
            </Reveal>
            <Reveal>
              <p>
                Tack Malin Sundqvist för att jag fått låna din underbara Sarek &
                tack Kim Thuner för förtroendet med Skrållan.
                <br /> <br />
                Läs mer om vår nya valpkull nedan.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="current-wrapper">
        <div className="current">
          <div className="previous-left">
            <Reveal>
              <h3>Yxtanejdens Sarek x Laverdabooms Skrållan</h3>
            </Reveal>
            <Reveal>
              <p className="date">2023-07-21</p>
            </Reveal>
            <ul>
              <Reveal>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms Rosie Cotton </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            </ul>
            <ul>
              <Reveal>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms Legolas </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            </ul>
            <ul>
              <Reveal>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms Bilbo Bagger </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            </ul>
            <ul>
              <Reveal>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms Galadriel </p>
                    </div>
                  </div>
                </li>
              </Reveal>
              <Reveal>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms Gimli </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            </ul>
          </div>
          <div className="previous-right">
            <Reveal>
              <div className="current-image-container">
                <img src={`${assetUrl}lotr1.jpeg`} />
                <img src={`${assetUrl}lotr2.jpeg`} />
                <img src={`${assetUrl}lotr3.jpeg`} />
                <img src={`${assetUrl}lotr4.jpeg`} />
                <img src={`${assetUrl}lotr5.jpeg`} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="puppies-previous">
        <div className="puppies-previous-intro">
          <Reveal>
            <h2>Tidiare valpkullar</h2>
          </Reveal>
          <div className="family">
            <div className="previous-left">
              <Reveal>
                <h3>Chirribi's Mc Laverdatax x Hannes Vom Strootbachtal</h3>
              </Reveal>
              <Reveal>
                <p className="date">2016-03-24</p>
              </Reveal>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        <p>Laverdabooms My Little Shiningarmor</p>
                        <p>SE28130/2016</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        {" "}
                        <p>Laverdabooms My Little King Sombra</p>
                        <p>SE28131/2016</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        <p>Laverdabooms My Little Pinkie Pie</p>
                        <p>SE28128/2016</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        <p>Laverdabooms My Little Sweetiebelle</p>
                        <p>SE28129/2016</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
            </div>
            <div className="previous-right">
              <Reveal>
                <img src={`${assetUrl}valpkull1.jpg`} />
              </Reveal>
            </div>
          </div>
          <div className="family">
            <div className="previous-left">
              <Reveal>
                <h3>
                  Laverdabooms My Little Pinkie Pie x Red Top's Tiger Of Sweden
                </h3>
              </Reveal>
              <Reveal>
                <p className="date">2020-04-12</p>
              </Reveal>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        <p>Laverdabooms Mio Min Mio</p>
                        <p>SE36328/2020</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        {" "}
                        <p>Laverdabooms Skrållan</p>
                        <p>SE36329/2020</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        <p>Laverdabooms Madicken</p>
                        <p>SE36330/2020</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        <p>Laverdabooms Kajsa Kavat</p>
                        <p>SE36331/2020</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
            </div>
            <div className="previous-right">
              <Reveal>
                <img src={`${assetUrl}valpkull2.jpg`} />
              </Reveal>
            </div>
          </div>
          <div className="family">
            <div className="previous-left">
              <Reveal>
                <h3>Laverdabooms My Little Pinkie Pie x Ögus Nappe</h3>
              </Reveal>
              <Reveal>
                <p className="date">2021-01-23</p>
              </Reveal>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        <p>Laverdabooms Dobby</p>
                        <p>SE17821/2021</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        {" "}
                        <p>Laverdabooms Lily Potter</p>
                        <p>SE17822/2021</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        <p>Laverdabooms Luna Lovegood</p>
                        <p>SE17819/2021</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
              <ul>
                <Reveal>
                  <li>
                    <div className="previous-puppie">
                      <FaDog size={18} />
                      <div>
                        <p>Laverdabooms Ginny Weasley</p>
                        <p>SE17820/2021</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              </ul>
            </div>
            <div className="previous-right">
              <Reveal>
                <img src={`${assetUrl}valpkull3.jpg`} />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puppies;
