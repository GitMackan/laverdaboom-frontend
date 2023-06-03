import { assetUrl } from "../../assets/constants";
import ImageGallery from "react-image-gallery";
import { FaCircle } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import "./Dog.scss";

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
  BPH?: string;
  eye?: string;
  birthDate?: string;
  description?: string;
  angelDog?: string;
  titles?: string[];
  image: string[];
};

const Dog = ({ dog }: DogProps) => {
  const currentDog = dog && dog[0];

  const images: any = currentDog?.image.map((e) => ({
    original: `${assetUrl}${e}`,
    thumbnail: `${assetUrl}${e}`,
  }));

  return (
    <div className="dog-wrapper">
      <div className="dog-container">
        <h1>{currentDog?.name}</h1>
        <div className="dog-main-image ">
          {currentDog?.image && (
            <div className="gallery">
              <ImageGallery
                items={images}
                showBullets={true}
                showPlayButton={false}
                autoPlay={false}
              />
            </div>
          )}
        </div>
        <div className="presentation">
          <div className="dog-info">
            <ul>
              {currentDog?.regNr && (
                <li>
                  <div className="dog-info-container">
                    {/* <FiAward size={24} /> */}
                    <div>
                      <p className="dog-info-heading">Reg.nr:</p>
                      <p className="dog-info-body">{currentDog.regNr}</p>
                    </div>
                  </div>
                </li>
              )}
              {currentDog?.breed && (
                <li>
                  <div className="dog-info-container">
                    {/* <FiAward size={24} /> */}
                    <div>
                      <p className="dog-info-heading">Ras:</p>
                      <p className="dog-info-body">{currentDog.breed}</p>
                    </div>
                  </div>
                </li>
              )}
              {currentDog?.gender && (
                <li>
                  <div className="dog-info-container">
                    {/* <FiAward size={24} /> */}
                    <div>
                      <p className="dog-info-heading">Kön:</p>
                      <p className="dog-info-body">{currentDog.gender}</p>
                    </div>
                  </div>
                </li>
              )}
              {currentDog?.hairType && (
                <li>
                  <div className="dog-info-container">
                    {/* <FiAward size={24} /> */}
                    <div>
                      <p className="dog-info-heading">Hårlag:</p>
                      <p className="dog-info-body">{currentDog.hairType}</p>
                    </div>
                  </div>
                </li>
              )}
              {currentDog?.color && (
                <li>
                  <div className="dog-info-container">
                    {/* <FiAward size={24} /> */}
                    <div>
                      <p className="dog-info-heading">Färg:</p>
                      <p className="dog-info-body">{currentDog.color}</p>
                    </div>
                  </div>
                </li>
              )}
              {currentDog?.IVDD && (
                <li>
                  <div className="dog-info-container">
                    {/* <FiAward size={24} /> */}
                    <div>
                      <p className="dog-info-heading">Ivdd:</p>
                      <p className="dog-info-body">{currentDog.IVDD}</p>
                    </div>
                  </div>
                </li>
              )}
              {currentDog?.BPH && (
                <li>
                  <div className="dog-info-container">
                    {/* <FiAward size={24} /> */}
                    <div>
                      <p className="dog-info-heading">BPH:</p>
                      <p className="dog-info-body">{currentDog.BPH}</p>
                    </div>
                  </div>
                </li>
              )}
              {currentDog?.eye && (
                <li>
                  <div className="dog-info-container">
                    {/* <FiAward size={24} /> */}
                    <div>
                      <p className="dog-info-heading">Ögon:</p>
                      <p className="dog-info-body">{currentDog.eye}</p>
                    </div>
                  </div>
                </li>
              )}
              {currentDog?.birthDate && (
                <li>
                  <div className="dog-info-container">
                    {/* <FiAward size={24} /> */}
                    <div>
                      <p className="dog-info-heading">Födelsedatum:</p>
                      <p className="dog-info-body">{currentDog.birthDate}</p>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>

          {currentDog?.description && (
            <div className="description">
              <p className="description-text">{currentDog.description}</p>
            </div>
          )}
          {currentDog?.titles && currentDog?.titles?.length > 0 && (
            <div className="titles">
              <h5>Titlar & Meriter</h5>
              <div className="titles-container">
                {currentDog.titles.map((e) => (
                  <div className="title">
                    <FiAward color={"#324b4c"} size={24} />
                    <p>{e}</p>
                  </div>
                ))}
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
  dog: DogType[] | undefined;
}
