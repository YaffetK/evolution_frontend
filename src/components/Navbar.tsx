import DropDown from "./DropDown";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className=" bg-dgray w-full">
      <div className="flex justify-end">
        {NavItems.map((item, index) => {
          return (
            <>
              <div key={index} className="p-10 text-white text-xl">
                {item.name}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
