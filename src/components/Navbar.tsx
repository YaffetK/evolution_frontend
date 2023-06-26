import DropDown from "./DropDown";
import NavItems from "./NavItems";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/${"about"}`);
  }

  function handleClick(): void {
    handleNavigation();
  }
  return (
    <div className="bg-dgray w-full">
      <div className="flex justify-end">
        {NavItems.map((item, index) => (
          <div
            key={index}
            className="p-10 text-white text-xl hover:cursor-pointer hover:bg-gray-400"
            onClick={handleClick}
          >
            {item.name}
          </div>
        ))}
      </div>

      <h1 className="text-white absolute top-4 left-4"> Evolution</h1>
    </div>
  );
};

export default Navbar;
