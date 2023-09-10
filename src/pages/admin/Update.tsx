import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { assetUrl } from "../../assets/constants";
import { DogType } from "../dogs/Dog";
import { FiX } from "react-icons/fi";
import PedigreeModal from "../../components/PedigreeModal/PedigreeModal";

export type Parent = {
  name: string;
  titles: string[];
};

export type Pedigree = Parent[];

const Update = () => {
  const [dogs, setDogs] = useState<DogType[] | undefined>();
  const [selectedDogId, setSelectedDogId] = useState<string>();
  const [name, setName] = useState<string | undefined>();
  const [breed, setBreed] = useState<string | undefined>();
  const [gender, setGender] = useState<string | undefined>();
  const [hairType, setHairType] = useState<string | undefined>();
  const [regNr, setRegNr] = useState<string | undefined>();
  const [color, setColor] = useState<string | undefined>();
  const [IVDD, setIVDD] = useState<string | undefined>();
  const [BPH, setBPH] = useState<string | undefined>();
  const [eyes, setEyes] = useState<string | undefined>();
  const [birthDate, setBirthDate] = useState<string | undefined>();
  const [titles, setTitles] = useState<string[]>([]);
  const [description, setDescription] = useState<string | undefined>();
  const [cookies, setCookie] = useCookies(["LAVERDABOOM-AUTH"]);
  const [image, setImage] = useState<any>();
  const [selectedImg, setSelectedImg] = useState<string | undefined>();
  const cookie = cookies["LAVERDABOOM-AUTH"];
  const [submitted, setSubmitted] = useState(false);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newParentName, setNewParentName] = useState<string>("");
  const [pedigree, setPedigree] = useState<Pedigree>([]);
  const [chosenParent, setChosenParent] = useState<Parent>();
  const [openModal, setOpenModal] = useState(false);
  const [index, setIndex] = useState<number>();
  const URL = process.env.REACT_APP_SERVER_URL;

  const handleImageChange = (event: any) => {
    setImage(event.target.files[0]);
  };

  axios.defaults.withCredentials = true;

  useEffect(() => {
    setSelectedImg(undefined);
    setImage(undefined);
  }, [selectedDogId]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.patch(
        `https://laverdaboom-api.herokuapp.com/dogs/${selectedDogId}`,
        {
          name: name,
          breed: breed && breed,
          gender: gender && gender,
          hairType: hairType && hairType,
          regNr: regNr && regNr,
          color: color && color,
          IVDD: IVDD && IVDD,
          BPH: BPH && BPH,
          eyes: eyes && eyes,
          birthDate: birthDate && birthDate,
          description: description && description,
          image: selectedDog && selectedDog.image,
          file: image && image,
          titles: titles && titles,
          sessionToken: cookie,
          pedigree: pedigree && pedigree,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setSubmitted(!submitted);
      setSelectedImg(undefined);
      setImage(undefined);
    } catch (error) {
      console.log(error);
      setSelectedImg(undefined);
      setImage(undefined);
    }
  };

  const handleRemoveImage = async (e: any) => {
    e.preventDefault();
    const newImages = selectedDog?.image.filter((e) => e !== selectedImg);
    try {
      await axios.patch(
        `${URL}/dogs/${selectedDogId}`,
        {
          name: name && name,
          breed: breed && breed,
          gender: gender && gender,
          hairType: hairType && hairType,
          regNr: regNr && regNr,
          color: color && color,
          IVDD: IVDD && IVDD,
          BPH: BPH && BPH,
          eyes: eyes && eyes,
          birthDate: birthDate && birthDate,
          description: description && description,
          file: image && image,
          image: newImages,
          titles: titles && titles,
          sessionToken: cookie,
          pedigree: pedigree && pedigree,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      setSubmitted(!submitted);
      setSelectedImg(undefined);
      setImage(undefined);
    } catch (error) {
      console.log(error);
      setSelectedImg(undefined);
      setImage(undefined);
    }
  };

  useEffect(() => {
    axios.get(`${URL}/dogs`).then((response) => {
      setDogs(response.data);
    });
  }, [submitted]);

  const selectedDog = dogs?.find(
    (e) => e._id.toLowerCase() === selectedDogId?.toLowerCase()
  );

  console.log(dogs);

  useEffect(() => {
    if (selectedDog) {
      setName(selectedDog.name || undefined);
      setBreed(selectedDog.breed || undefined);
      setGender(selectedDog.gender);
      setHairType(selectedDog.hairType);
      setRegNr(selectedDog.regNr);
      setColor(selectedDog.color);
      setIVDD(selectedDog.IVDD);
      setBPH(selectedDog.BPH);
      setEyes(selectedDog.eye);
      setBirthDate(selectedDog.birthDate);
      setDescription(selectedDog.description);
      setTitles(selectedDog.titles as string[]);
      setPedigree(selectedDog.pedigree);
    }
  }, [selectedDogId]);

  return (
    <div className="update-wrapper">
      <div className="update-container">
        <div className="update-dog-list">
          <ul>
            {dogs?.map((e) => (
              <li
                key={e._id}
                className={selectedDogId === e._id ? "chosen" : ""}
                onClick={() => setSelectedDogId(e._id)}
              >
                {e.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="update-form">
          <div className="add-form-container">
            <form
              className="add-form"
              onSubmit={onSubmit}
              key={selectedDog && selectedDog._id}
            >
              <div className="input-field-container">
                <label htmlFor="">Namn:</label>
                <input
                  type="text"
                  value={name ? name : ""}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-field-container">
                <label htmlFor="">Ras:</label>
                <input
                  type="text"
                  value={breed ? breed : ""}
                  onChange={(e) => setBreed(e.target.value)}
                />
              </div>
              <div className="input-field-container">
                <label htmlFor="">Kön:</label>
                <input
                  type="text"
                  value={gender ? gender : ""}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div className="input-field-container">
                <label htmlFor="">Hår:</label>
                <input
                  type="text"
                  value={hairType ? hairType : ""}
                  onChange={(e) => setHairType(e.target.value)}
                />
              </div>
              <div className="input-field-container">
                <label htmlFor="">Regnr:</label>
                <input
                  type="text"
                  value={regNr ? regNr : ""}
                  onChange={(e) => setRegNr(e.target.value)}
                />
              </div>
              <div className="input-field-container">
                <label htmlFor="">Färg:</label>
                <input
                  type="text"
                  value={color ? color : ""}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="input-field-container">
                <label htmlFor="">IVDD:</label>
                <input
                  type="text"
                  value={IVDD ? IVDD : ""}
                  onChange={(e) => setIVDD(e.target.value)}
                />
              </div>
              <div className="input-field-container">
                <label htmlFor="">BPH:</label>
                <input
                  type="text"
                  value={BPH ? BPH : ""}
                  onChange={(e) => setBPH(e.target.value)}
                />
              </div>
              <div className="input-field-container">
                <label htmlFor="">Ögon:</label>
                <input
                  type="text"
                  value={eyes ? eyes : ""}
                  onChange={(e) => setEyes(e.target.value)}
                />
              </div>
              <div className="input-field-container">
                <label htmlFor="">Födelsedatum:</label>
                <input
                  type="text"
                  value={birthDate ? birthDate : ""}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div className="input-field-container">
                <label htmlFor="">Beskrivning:</label>
                <input
                  type="text"
                  value={description ? description : ""}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="pedigree">
                <div className="input-field-container">
                  <label htmlFor="">Stamtavla:</label>
                  <div className="parent-container">
                    {pedigree.length > 0 &&
                      pedigree.map((e, i) => (
                        <div key={i} className="parent-in-pedigree">
                          <p
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setChosenParent(pedigree[i]);
                              setIndex(i);
                              setOpenModal(true);
                            }}
                          >
                            {e.name}
                          </p>
                          <FiX
                            size={20}
                            style={{ cursor: "pointer", marginLeft: "10px" }}
                            onClick={() =>
                              setPedigree(
                                pedigree.filter(
                                  (parent) => parent.name !== e.name
                                )
                              )
                            }
                          />
                        </div>
                      ))}
                  </div>

                  <label htmlFor="">Namn:</label>
                  <input
                    type="text"
                    value={newParentName ? newParentName : ""}
                    onChange={(e) => setNewParentName(e.target.value)}
                  />

                  <button
                    className="title-btn"
                    onClick={() => {
                      setPedigree((prevState) => [
                        ...prevState,
                        { name: newParentName, titles: [] },
                      ]);
                      setNewParentName("");
                    }}
                  >
                    Lägg till förälder
                  </button>
                </div>
                {chosenParent && (
                  <PedigreeModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    chosenParent={chosenParent}
                    pedigree={pedigree}
                    setPedigree={setPedigree}
                    index={index as number}
                  />
                )}
              </div>
              <div className="input-field-container">
                <label htmlFor="">Titlar:</label>
                <div className="titles-wrapper">
                  {titles?.map((e) => (
                    <div className="titles-container">
                      <p>{e}</p>
                      <FiX
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setTitles(titles.filter((title) => title !== e))
                        }
                      />
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <button
                  className="title-btn"
                  onClick={() => {
                    setTitles((prevTitles) => [...prevTitles, newTitle]);
                    setNewTitle("");
                  }}
                >
                  Lägg till titel
                </button>
              </div>
              {selectedDog && selectedDog.image.length > 0 && (
                <div className="input-field-container">
                  {selectedDog.image.map((e) => (
                    <img
                      key={e}
                      src={`${assetUrl}${e}`}
                      onClick={() => setSelectedImg(e)}
                      className={selectedImg === e ? "selectedImg" : ""}
                    />
                  ))}
                  {selectedImg && (
                    <button className="removeBtn" onClick={handleRemoveImage}>
                      Ta bort vald bild
                    </button>
                  )}
                </div>
              )}
              <div className="input-field-container">
                <label htmlFor="">Bild:</label>
                <input type="file" name="file" onChange={handleImageChange} />
              </div>
              <div className="input-field-container">
                <button className="add-btn" type="submit">
                  Uppdaterades
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
