import axios from "axios";
import React, { useRef, useState } from "react";
import { useCookies } from "react-cookie";

const AddNew = () => {
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
  const [description, setDescription] = useState<string | undefined>();
  const [cookies, setCookie] = useCookies(["LAVERDABOOM-AUTH"]);
  const [image, setImage] = useState<any>();
  const [displayImage, setDisplayImage] = useState<any>(null);
  const cookie = cookies["LAVERDABOOM-AUTH"];

  const handleImageChange = (event: any) => {
    setImage(event.target.files[0]);

    setDisplayImage(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    await axios.post(
      `https://laverdaboom-api.herokuapp.com/dogs`,
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
        image: image && image,
        sessionToken: cookie,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          // Cookie: cookie,
        },
        withCredentials: true,
      }
    );
  };

  return (
    <div>
      <div className="add-container">
        <h2>Lägg till hund</h2>
        <div className="add-form-container">
          <form className="add-form" onSubmit={onSubmit}>
            <div className="input-field-container">
              <label htmlFor="">Namn:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="">Ras:</label>
              <input
                type="text"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="">Kön:</label>
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="">Hår:</label>
              <input
                type="text"
                value={hairType}
                onChange={(e) => setHairType(e.target.value)}
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="">Regnr:</label>
              <input
                type="text"
                value={regNr}
                onChange={(e) => setRegNr(e.target.value)}
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="">Färg:</label>
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="">IVDD:</label>
              <input
                type="text"
                value={IVDD}
                onChange={(e) => setIVDD(e.target.value)}
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="">BPH:</label>
              <input
                type="text"
                value={BPH}
                onChange={(e) => setBPH(e.target.value)}
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="">Ögon:</label>
              <input
                type="text"
                value={eyes}
                onChange={(e) => setEyes(e.target.value)}
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="">Födelsedatum:</label>
              <input
                type="text"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="">Beskrivning:</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="">Bild:</label>
              <input type="file" onChange={handleImageChange} />
            </div>
            <div className="input-field-container">
              <button className="add-btn" type="submit">
                Lägg till
              </button>
            </div>
          </form>
        </div>
        {image && (
          <div className="display-image">
            <img src={displayImage} alt="display" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddNew;
