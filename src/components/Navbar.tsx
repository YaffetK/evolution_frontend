import React from "react";
import { NavOption } from "./Navbar";
import NavItems from "./Navbar";

const Navbar = () => {
  return (
    <div className=" bg-dgray">
      <div className="flex justify-end">
        {NavItems.map((item, index) => {
          return (
            <div key={index} className="p-10 text-white text-xl">
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
