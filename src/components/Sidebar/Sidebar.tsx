import React from "react";
import "./Sidebar.scss";
import { DogType } from "../../pages/dogs/Dog";

const Sidebar = ({ setSelectedDogId, dogs }: SidebarProps) => {
  const maleDogs = dogs?.filter((e) => e.gender?.toLowerCase() === "hane");
  const femaleDogs = dogs?.filter(
    (e) => e.gender?.toLowerCase() === "tik" && e.angelDog !== "true"
  );
  const angelDogs = dogs?.filter((e) => e.angelDog?.toLowerCase() === "true");

  return (
    <div className="sidebar">
      <div className="sidebar-heading">
        {/* <h1>Hundar</h1> */}
        <p onClick={() => setSelectedDogId(undefined)}>Se alla</p>
      </div>
      <ul>
        <h3>Tikar</h3>
        {femaleDogs?.map((e) => (
          <li key={e._id}>
            <p onClick={() => setSelectedDogId(e._id)}>{e.name}</p>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Hanar</h3>
        {maleDogs?.map((e) => (
          <li key={e._id}>
            <p onClick={() => setSelectedDogId(e._id)}>{e.name}</p>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Änglahundar</h3>
        {angelDogs?.map((e) => (
          <li key={e._id}>
            <p onClick={() => setSelectedDogId(e._id)}>{e.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

interface SidebarProps {
  setSelectedDogId: React.Dispatch<React.SetStateAction<string | undefined>>;
  dogs: DogType[] | undefined;
}
