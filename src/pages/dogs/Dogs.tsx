import { useEffect, useState } from "react";
import "./Dogs.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dog, { DogType } from "./Dog";
import axios from "axios";
import { useWindowSize } from "../../utility/useWindowSize";
import MobileSidebar from "../../components/MobileSidebar/MobileSidebar";
import { assetUrl } from "../../assets/constants";

const Dogs = () => {
  const [dogs, setDogs] = useState<DogType[] | undefined>();
  const [selectedDogId, setSelectedDogId] = useState<DogType["_id"]>();
  const windowWidth = useWindowSize().width;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getDogs = async () => {
    await axios.get("http://localhost:8080/dogs").then((response) => {
      setDogs(response.data);
    });
  };

  useEffect(() => {
    getDogs();
  }, []);

  const selectedDog = dogs?.filter((e) => e._id === selectedDogId);

  return (
    <div className="dogs-homepage">
      <div className="dogs-container">
        {windowWidth && windowWidth < 1150 ? (
          <MobileSidebar setSelectedDogId={setSelectedDogId} dogs={dogs} />
        ) : (
          <Sidebar setSelectedDogId={setSelectedDogId} dogs={dogs} />
        )}

        {selectedDogId ? (
          <Dog dog={selectedDog} />
        ) : (
          <div className="all-dogs-wrapper">
            <div className="all-dogs-container">
              {dogs?.map((e) => (
                <div className="all-dogs-dog">
                  <h3>{e.name}</h3>
                  <div className="all-dogs-image-container">
                    <img
                      src={`${assetUrl}${e.image[0]}`}
                      onClick={() => setSelectedDogId(e._id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dogs;
