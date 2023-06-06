import React, { useState } from "react";

const HamburgerButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={`hamburger-menu ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <b className="bar1"></b>
      <b className="bar2"></b>
      <b className="bar3"></b>
    </div>
  );
};

export default HamburgerButton;
