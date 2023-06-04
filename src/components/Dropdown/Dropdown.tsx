import React, { useEffect, useRef, useState } from "react";
// import { AngleDown12 } from "../icons/AngleDown12";
// import { AngleUp12 } from "../icons/AngleUp12";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
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
  setSelected,
  onChange,
  name,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined
  );

  const dropDownRef = useRef(null);
  useOutsideAlerter(dropDownRef, setIsOpen);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  console.log(options);

  return (
    <div ref={dropDownRef} className={"dropDown-container"}>
      <div onClick={toggleList} className={"second"}>
        <div className={"third"}>
          {title &&
            (selectedItem ? (
              <div>
                <p>{selectedItem}</p>
              </div>
            ) : (
              <p>{title}</p>
            ))}
          {!title && (
            <div>
              <p>{selectedItem}</p>
            </div>
          )}
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
              <li
                id={item.name}
                onClick={(e) => {
                  setSelectedItem(item.name);
                  setIsOpen(false);

                  if (setSelected) {
                    setSelected(item._id);
                  }
                }}
                className={"fifth"}
              >
                <div>
                  <p className="dropdown-listItem">{item?.name}</p>
                </div>
              </li>
            ))}
          <li>
            <p className="dropdown-heading">Hanar</p>
          </li>
          {options
            ?.filter((e) => e.gender?.toLowerCase() === "hane" && !e.angelDog)
            .map((item) => (
              <li
                id={item.name}
                onClick={(e) => {
                  setSelectedItem(item.name);
                  setIsOpen(false);

                  if (setSelected) {
                    setSelected(item._id);
                  }
                }}
                className={"fifth"}
              >
                <div>
                  <p className="dropdown-listItem">{item?.name}</p>
                </div>
              </li>
            ))}
          <li>
            <p className="dropdown-heading">Änglahundar</p>
          </li>
          {options
            ?.filter((e) => e.angelDog)
            .map((item) => (
              <li
                id={item.name}
                onClick={(e) => {
                  setSelectedItem(item.name);
                  setIsOpen(false);

                  if (setSelected) {
                    setSelected(item._id);
                  }
                }}
                className={"fifth"}
              >
                <div>
                  <p className="dropdown-listItem">{item?.name}</p>
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
  setSelected?: React.Dispatch<React.SetStateAction<string | undefined>>;
  onChange?: any;
  name?: string;
}
