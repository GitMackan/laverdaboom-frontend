import React from "react";
import { DogType } from "../../pages/dogs/Dog";
import DropdownMenu from "../Dropdown/Dropdown";
import "./MobileSidebar.scss";

const MobileSidebar = ({ setSelectedDogId, dogs }: MobileSidebarProps) => {
  return (
    <div>
      <DropdownMenu
        options={dogs}
        setSelected={setSelectedDogId}
        title="Välj hund"
      />
    </div>
  );
};

export default MobileSidebar;

interface MobileSidebarProps {
  setSelectedDogId: React.Dispatch<React.SetStateAction<string | undefined>>;
  dogs: DogType[] | undefined;
}
