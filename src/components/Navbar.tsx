import { Link } from "react-router-dom";
import { useState } from "react";

import HamburgarMenu from "./HamburgarMenu";
import NavItems from "./NavItems";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  function handleToggle() {
    setIsToggled(!isToggled);
  }

  return (
    <nav className="bg-dgray w-full h-auto">
      <ul className="flex items-center justify-end mr-3">
        {NavItems.map((item) => {
          return (
            <li
              key={item.id}
              className="py-5 px-3 text-black text-xl hover:cursor-pointer hover:bg-gray-400"
            >
              <Link className="text-black text-3xl" to="/">
                {item.name}
              </Link>
            </li>
          );
        })}

        <ul>
          <li className="p-5 text-black text-3xl hover:cursor-pointer hover:bg-gray-400">
            {/* <DropDown /> */}

            <HamburgarMenu
              navItems={NavItems}
              isToggled={isToggled}
              handleToggle={handleToggle}
            />
          </li>{" "}
          {/*
             <div className="bg-dgray -z-10 shadow-md ">
               <li className="p-10 text-black text-xl hover:cursor-pointer hover:bg-gray-400">
                 <Link className="text-black" to="/profile">
                   Your account
                 </Link>
               </li>
               <li className="p-10 text-black text-xl hover:cursor-pointer hover:bg-gray-400">
                 <Link className="text-black" to="/profile">
                   Sign out
                 </Link>
               </li>
             </div> */}
        </ul>
      </ul>

      <h1 className="text-black font-serif absolute top-4 left-4 text-3xl md:text-5xl lg:text-6xl">
        {" "}
        Evolution
      </h1>
    </nav>
  );
};

export default Navbar;
