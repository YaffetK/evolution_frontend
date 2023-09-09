import { useState } from "react";
import NavItems from "./NavItems";
import { NavOption } from "./NavItems";
import { boolean } from "zod";

interface HamburgarProps {
  navItems: NavOption[];
  isToggled: boolean;
  handleToggle: () => void;
}

const HamburgarMenu = ({
  navItems,
  isToggled,
  handleToggle,
}: HamburgarProps) => {
  const handleClick = () => {
    handleToggle();
  };
  return (
    <div>
      {isToggled ? (
        <ul onClick={handleClick} className="flex flex-col">
          {navItems.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      ) : (
        "hello"
      )}
    </div>
  );
};

export default HamburgarMenu;
