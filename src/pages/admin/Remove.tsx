import axios from "axios";
import { cookies } from "next/dist/client/components/headers";
import React, { useEffect, useState } from "react";
import { DogType } from "../dogs/Dog";
import { useCookies } from "react-cookie";

const Remove = () => {
  const [dogs, setDogs] = useState<DogType[] | undefined>();
  const [selectedDogId, setSelectedDogId] = useState<string>();
  const [cookies, setCookie] = useCookies(["LAVERDABOOM-AUTH"]);
  const cookie = cookies["LAVERDABOOM-AUTH"];
  const URL = process.env.REACT_APP_SERVER_URL;

  const handleRemove = async () => {
    await axios.delete(`${URL}/dogs/${selectedDogId}`, {
      data: {
        sessionToken: cookie,
      },
    });
  };

  useEffect(() => {
    axios.get(`${URL}/dogs`).then((response) => {
      setDogs(response.data);
    });
  }, []);

  return (
    <div>
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
        <button className="add-btn" onClick={handleRemove}>
          Ta bort{" "}
        </button>
      </div>
    </div>
  );
};

export default Remove;
