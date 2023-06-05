import React from "react";
import { DogType } from "../../pages/dogs/Dog";
import DropdownMenu from "../Dropdown/Dropdown";
import "./MobileSidebar.scss";

const MobileSidebar = ({ dogs }: MobileSidebarProps) => {
  return (
    <div>
      <DropdownMenu options={dogs} title="Välj hund" />
    </div>
  );
};

export default MobileSidebar;

interface MobileSidebarProps {
  dogs: DogType[] | undefined;
}
