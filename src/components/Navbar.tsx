import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDownClick = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <nav className="bg-dgray w-full h-auto">
      <ul className="flex items-center justify-end mr-3">
        <li className="py-5 px-3 text-black text-xl hover:cursor-pointer hover:bg-gray-400">
          <Link className="text-black text-3xl" to="/">
            Home
          </Link>
        </li>
        <li className="p-5 text-black t hover:cursor-pointer hover:bg-gray-400">
          <Link className="text-black text-3xl" to="/about">
            About
          </Link>
        </li>
        <ul>
          <li
            onClick={handleDropDownClick}
            className="p-5 text-black text-3xl hover:cursor-pointer hover:bg-gray-400"
          >
            Profile
          </li>
          {showDropDown && (
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
            </div>
          )}
        </ul>
      </ul>

      <h1 className="text-black font-serif absolute top-4 left-4">
        {" "}
        Evolution
      </h1>
    </nav>
  );
};

export default Navbar;
