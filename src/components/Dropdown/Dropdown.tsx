import React, { useEffect, useRef, useState } from "react";
// import { AngleDown12 } from "../icons/AngleDown12";
// import { AngleUp12 } from "../icons/AngleUp12";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { DogType } from "../../pages/dogs/Dog";
import "./Dropdown.scss";

export type Option = {
  _key?: string;
  info?: string;
  value?: string;
  label: string;
  _type?: string;
  id?: string;
};

export function useOutsideAlerter(ref: any, setState: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const DropdownMenu = ({
  options,
  title,
  label,
  onChange,
  name,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined
  );
  const params = useParams();
  console.log(params);

  const dropDownRef = useRef(null);
  useOutsideAlerter(dropDownRef, setIsOpen);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [params]);

  console.log(options);

  return (
    <div ref={dropDownRef} className={"dropDown-container"}>
      <div onClick={toggleList} className={"second"}>
        <div className={"third"}>
          <p>{params.id || "Välj hund"}</p>
          {isOpen ? <FiArrowUp /> : <FiArrowDown />}
        </div>
      </div>
      {isOpen && (
        <ul
          role="list"
          className={"fourth"}
          style={{
            zIndex: isOpen ? 10 : 0,
            display: isOpen ? "block" : "none",
          }}
        >
          <li>
            <p className="dropdown-heading">Tikar</p>
          </li>
          {options
            ?.filter((e) => e.gender?.toLowerCase() === "tik" && !e.angelDog)
            .map((item) => (
              <li id={item.name} className={"fifth"}>
                <div>
                  <Link to={`/dogs/${item.name}`}>
                    <p className="dropdown-listItem">{item?.name}</p>
                  </Link>
                </div>
              </li>
            ))}
          <li>
            <p className="dropdown-heading">Hanar</p>
          </li>
          {options
            ?.filter((e) => e.gender?.toLowerCase() === "hane" && !e.angelDog)
            .map((item) => (
              <li id={item.name} className={"fifth"}>
                <div>
                  <Link to={`/dogs/${item.name}`}>
                    <p className="dropdown-listItem">{item?.name}</p>
                  </Link>
                </div>
              </li>
            ))}
          <li>
            <p className="dropdown-heading">Änglahundar</p>
          </li>
          {options
            ?.filter((e) => e.angelDog)
            .map((item) => (
              <li id={item.name} className={"fifth"}>
                <div>
                  <Link to={`/dogs/${item.name}`}>
                    <p className="dropdown-listItem">{item?.name}</p>
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;

interface DropdownMenuProps {
  options?: DogType[];
  title?: string;
  label?: string;
  onChange?: any;
  name?: string;
}
