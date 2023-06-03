import axios from "axios";
import React, { useEffect, useState } from "react";
import { DogType } from "../dogs/Dog";

const Remove = () => {
  const [dogs, setDogs] = useState<DogType[] | undefined>();
  const [selectedDogId, setSelectedDogId] = useState<string>();

  const handleRemove = () => {
    axios.delete(
      `https://laverdaboom-api.herokuapp.com/dogs/${selectedDogId}`,
      {
        headers: {
          "Content-Type": "application/json",
          // Cookie: cookie,
        },
        withCredentials: true,
      }
    );
  };

  useEffect(() => {
    axios.get("https://laverdaboom-api.herokuapp.com/dogs").then((response) => {
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
