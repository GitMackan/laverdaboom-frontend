import { assetUrl } from "../../assets/constants";
import ImageGallery from "react-image-gallery";
import { FiAward } from "react-icons/fi";
import "./Dog.scss";
import Reveal from "../../components/Animation.tsx/Reveal";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useWindowSize } from "../../utility/useWindowSize";
import MobileSidebar from "../../components/MobileSidebar/MobileSidebar";
import { Parent } from "../admin/Update";

export type DogType = {
  _id: string;
  name: string;
  breed?: string;
  gender?: string;
  size?: string;
  hairType?: string;
  regNr?: string;
  color?: string;
  IVDD?: string;
  nickName: string;
  BPH?: string;
  eye?: string;
  birthDate?: string;
  description?: string;
  angelDog?: string;
  titles?: string[];
  image: string[];
  pedigree: Parent[];
};

const Dog = () => {
  const [dog, setDog] = useState<DogType>();
  const [dogs, setDogs] = useState<DogType[]>();
  const params = useParams();
  const windowWidth = useWindowSize().width;
  const URL = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    getDogs();
    getDog();
  }, [params]);

  const getDog = async () => {
    await axios.get(`${URL}/dogs/${params.name}`).then((response) => {
      setDog(response.data);
    });
  };

  const getDogs = async () => {
    await axios.get(`${URL}/dogs`).then((response) => {
      setDogs(response.data);
    });
  };

  const images: any = dog?.image.map((e) => ({
    original: `${assetUrl}${e}`,
    thumbnail: `${assetUrl}${e}`,
  }));

  return (
    <div className="dog-wrapper">
      <div className="dogs-container">
        {windowWidth && windowWidth < 1150 ? (
          <MobileSidebar dogs={dogs} />
        ) : (
          <Sidebar dogs={dogs} />
        )}

        <div className="dog-container">
          <Reveal>
            <h1>{dog?.name}</h1>
          </Reveal>
          <div className="dog-main-image ">
            {dog?.image && (
              <Reveal>
                <div className="gallery">
                  <ImageGallery
                    items={images}
                    showBullets={true}
                    showPlayButton={false}
                    autoPlay={false}
                  />
                </div>
              </Reveal>
            )}
          </div>
          <div className="presentation">
            <div className="dog-info">
              <ul>
                {dog?.regNr && (
                  <Reveal>
                    <li>
                      <div className="dog-info-container">
                        <div>
                          <p className="dog-info-heading">Reg.nr:</p>
                          <p className="dog-info-body">{dog.regNr}</p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                )}
                {dog?.breed && (
                  <Reveal>
                    <li>
                      <div className="dog-info-container">
                        <div>
                          <p className="dog-info-heading">Ras:</p>
                          <p className="dog-info-body">{dog.breed}</p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                )}
                {dog?.gender && (
                  <Reveal>
                    <li>
                      <div className="dog-info-container">
                        <div>
                          <p className="dog-info-heading">Kön:</p>
                          <p className="dog-info-body">{dog.gender}</p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                )}
                {dog?.hairType && (
                  <Reveal>
                    <li>
                      <div className="dog-info-container">
                        <div>
                          <p className="dog-info-heading">Hårlag:</p>
                          <p className="dog-info-body">{dog.hairType}</p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                )}
                {dog?.color && (
                  <Reveal>
                    <li>
                      <div className="dog-info-container">
                        <div>
                          <p className="dog-info-heading">Färg:</p>
                          <p className="dog-info-body">{dog.color}</p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                )}
                {dog?.IVDD && (
                  <Reveal>
                    <li>
                      <div className="dog-info-container">
                        <div>
                          <p className="dog-info-heading">Ivdd:</p>
                          <p className="dog-info-body">{dog.IVDD}</p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                )}
                {dog?.BPH && (
                  <Reveal>
                    <li>
                      <div className="dog-info-container">
                        <div>
                          <p className="dog-info-heading">BPH:</p>
                          <p className="dog-info-body">{dog.BPH}</p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                )}
                {dog?.eye && (
                  <Reveal>
                    <li>
                      <div className="dog-info-container">
                        <div>
                          <p className="dog-info-heading">Ögon:</p>
                          <p className="dog-info-body">{dog.eye}</p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                )}
                {dog?.birthDate && (
                  <Reveal>
                    <li>
                      <div className="dog-info-container">
                        <div>
                          <p className="dog-info-heading">Födelsedatum:</p>
                          <p className="dog-info-body">{dog.birthDate}</p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                )}
              </ul>
            </div>

            {dog?.description && (
              <div className="description">
                <Reveal>
                  <p className="description-text">{dog.description}</p>
                </Reveal>
              </div>
            )}
            {dog?.titles && dog?.titles?.length > 0 && (
              <div className="titles">
                <Reveal>
                  <h5>Titlar & Meriter</h5>
                </Reveal>
                <div className="titles-container">
                  {dog?.titles.map((e) => (
                    <Reveal
                      width={`${
                        windowWidth && windowWidth > 1100
                          ? "fit-content"
                          : "100%"
                      }`}
                    >
                      <div className="title">
                        <FiAward color={"#324b4c"} size={24} />
                        <p>{e}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>
          {dog?.pedigree && dog.pedigree.length > 0 && (
            <div className="pedigree-wrapper">
              <div className="pedigree-container">
                <Reveal>
                  <h2>Stamtavla</h2>
                </Reveal>
                <Reveal>
                  <div className="pedigree-grid">
                    <div className="column">
                      <div className="row">
                        <span>{dog?.pedigree[0].titles?.join(" ")}</span>
                        <p>{dog.pedigree[0]?.name}</p>
                      </div>
                      <div className="row">
                        <span>{dog?.pedigree[1]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[1]?.name}</p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="row">
                        <span>{dog?.pedigree[2]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[2]?.name}</p>
                      </div>
                      <div className="row">
                        <span>{dog?.pedigree[3]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[3]?.name}</p>
                      </div>
                      <div className="row">
                        <span>{dog?.pedigree[4]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[4]?.name}</p>
                      </div>
                      <div className="row">
                        <span>{dog?.pedigree[5]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[5]?.name}</p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="row">
                        <span>{dog?.pedigree[6]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[6]?.name}</p>
                      </div>
                      <div className="row">
                        <span>{dog?.pedigree[7]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[7]?.name}</p>
                      </div>
                      <div className="row">
                        <span>{dog?.pedigree[8]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[8]?.name}</p>
                      </div>
                      <div className="row">
                        <span>{dog?.pedigree[9]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[9]?.name}</p>
                      </div>
                      <div className="row">
                        <span>{dog?.pedigree[10]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[10]?.name}</p>
                      </div>
                      <div className="row">
                        <span>{dog?.pedigree[11]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[11]?.name}</p>
                      </div>
                      <div className="row">
                        <span>{dog?.pedigree[12]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[12]?.name}</p>
                      </div>
                      <div className="row">
                        <span>{dog?.pedigree[13]?.titles?.join(" ")}</span>
                        <p>{dog.pedigree[13]?.name}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dog;

interface DogProps {
  dog?: DogType[] | undefined;
}
