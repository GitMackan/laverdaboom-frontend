import React from "react";
import { assetUrl } from "../assets/constants";
import { FiCheck } from "react-icons/fi";
import { FaDog } from "react-icons/fa";

import "./Puppies.scss";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

const Puppies = () => {
  return (
    <div className="puppies-container">
      <div className="puppies-intro">
        <div className="intro-left">
          <h2>Våra Valpar</h2>
          <p>
            Vi söker valpköpare där hunden får vara en stor del av familjen. Vi
            ser gärna att ni som valpköpare aktiverar era hundar genom
            kurser,viltspår m.m.
          </p>
          <br />
          <p>
            Hos oss finns inget speciellt kö-system utan först träffas vi och
            ser vad ni och vi har för förväntningar på den nya familjemedlemmen
            och det nya hemmet. Om allt känns bra så placerar vi sedan ut
            valparna i hem, ut efter hur vi tror och anser att de passar bäst.
          </p>

          <h3>Det som följer med valpen när du köper av oss är:</h3>
          <ul>
            <li>
              <div className="check-list-item">
                <FiCheck />
                <p>SKK's köpekontrakt </p>
              </div>
            </li>
            <li>
              <div className="check-list-item">
                <FiCheck />
                <p>Stamtavla </p>
              </div>
            </li>
            <li>
              <div className="check-list-item">
                <FiCheck />
                <p>Ägaranmälan </p>
              </div>
            </li>
            <li>
              <div className="check-list-item">
                <FiCheck />
                <p>
                  Startpaket med valpfoder (samma som valpen ätit hos oss),
                  gosedjur, godis och en filt
                </p>
              </div>
            </li>
            <li>
              <div className="check-list-item">
                <FiCheck />
                <p>Informationsblad om försäkring </p>
              </div>
            </li>
          </ul>
          <h3>När valpen flyttar är den:</h3>
          <ul>
            <li>
              <div className="check-list-item">
                <FiCheck />
                <p>Registrerad i SKK</p>
              </div>
            </li>
            <li>
              <div className="check-list-item">
                <FiCheck />
                <p>Minst 8 veckor gammal</p>
              </div>
            </li>
            <li>
              <div className="check-list-item">
                <FiCheck />
                <p>Försäkrad i Folksam mot dolda fel</p>
              </div>
            </li>
            <li>
              <div className="check-list-item">
                <FiCheck />
                <p>Veterinärbesiktigade max 7 dagar innan flytt</p>
              </div>
            </li>
            <li>
              <div className="check-list-item">
                <FiCheck />
                <p>Vaccinerad</p>
              </div>
            </li>
            <li>
              <div className="check-list-item">
                <FiCheck />
                <p>ID-märkta med godkänt chip</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="intro-right">
          <img src={`${assetUrl}valpar-midsommar.jpeg`} />
          <img src={`${assetUrl}valpar_cover.jpeg`} />
        </div>
      </div>
      <div className="upcoming-puppies-wrapper">
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
                <b>Sire:</b> SE U(V)CH SE VCH RLD F RLD N Yxtanejdens Sarek
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
          </div>
        </div>
      </div>
      <div className="puppies-previous">
        <div className="puppies-previous-intro">
          <h2>Tidiare valpkullar</h2>
          <div className="family">
            <div className="previous-left">
              <h3>Chirribi's Mc Laverdatax x Hannes Vom Strootbachtal</h3>
              <p className="date">2016-03-24</p>
              <ul>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms My Little Shiningarmor</p>
                      <p>SE28130/2016</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul>
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
              </ul>
              <ul>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms My Little Pinkie Pie</p>
                      <p>SE28128/2016</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms My Little Sweetiebelle</p>
                      <p>SE28129/2016</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="previous-right">
              <img src={`${assetUrl}valpkull1.jpg`} />
            </div>
          </div>
          <div className="family">
            <div className="previous-left">
              <h3>
                Laverdabooms My Little Pinkie Pie x Red Top's Tiger Of Sweden
              </h3>
              <p className="date">2020-04-12</p>
              <ul>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms Mio Min Mio</p>
                      <p>SE36328/2020</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul>
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
              </ul>
              <ul>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms Madicken</p>
                      <p>SE36330/2020</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms Kajsa Kavat</p>
                      <p>SE36331/2020</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="previous-right">
              <img src={`${assetUrl}valpkull2.jpg`} />
            </div>
          </div>
          <div className="family">
            <div className="previous-left">
              <h3>Laverdabooms My Little Pinkie Pie x Ögus Nappe</h3>
              <p className="date">2021-01-23</p>
              <ul>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms Dobby</p>
                      <p>SE17821/2021</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul>
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
              </ul>
              <ul>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms Luna Lovegood</p>
                      <p>SE17819/2021</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="previous-puppie">
                    <FaDog size={18} />
                    <div>
                      <p>Laverdabooms Ginny Weasley</p>
                      <p>SE17820/2021</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="previous-right">
              <img src={`${assetUrl}valpkull3.jpg`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puppies;
