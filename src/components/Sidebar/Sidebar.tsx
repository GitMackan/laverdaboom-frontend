import React from "react";
import "./Sidebar.scss";
import { DogType } from "../../pages/dogs/Dog";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = ({ dogs }: SidebarProps) => {
  const maleDogs = dogs?.filter((e) => e.gender?.toLowerCase() === "hane");
  const femaleDogs = dogs?.filter(
    (e) => e.gender?.toLowerCase() === "tik" && e.angelDog !== "true"
  );
  const angelDogs = dogs?.filter((e) => e.angelDog?.toLowerCase() === "true");

  return (
    <div className="sidebar">
      <div className="sidebar-heading">
        {/* <h1>Hundar</h1> */}
        <Link to={"/dogs"}>
          <p>Se alla</p>
        </Link>
      </div>
      <ul>
        <h3>Tikar</h3>
        {femaleDogs?.map((e) => (
          <li key={e._id}>
            <Link to={`/dogs/${e.name}`}>
              <div>
                <FiMinus size={10} />
                <p>{e.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Hanar</h3>
        {maleDogs?.map((e) => (
          <li key={e._id}>
            <Link to={`/dogs/${e.name}`}>
              <div>
                <FiMinus size={10} />
                <p>{e.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Änglahundar</h3>
        {angelDogs?.map((e) => (
          <li key={e._id}>
            <Link to={`/dogs/${e.name}`}>
              <div>
                <FiMinus size={10} />
                <p>{e.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

interface SidebarProps {
  dogs: DogType[] | undefined;
}
