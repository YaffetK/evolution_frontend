import DropDown from "./DropDown";
import NavItems from "./NavItems";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function handleClick(name: string): void {
    navigate(`/${name}`);
  }
  return (
    <div className=" bg-dgray w-full">
      <div className="flex justify-end">
        {NavItems.map((item, index) => {
          return (
            <div
              key={index}
              className="p-10 text-white text-xl hover:cursor-pointer hover:bg-gray-400"
              onClick={handleClick}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
