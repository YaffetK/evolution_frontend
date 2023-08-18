import NavItems from "./Navbar";

const Navbar = () => {
  return (
    <div className="mb-5 bg-red-500">
      <div className="flex justify-end">
        {NavItems.map((item) => {
          return <div className="p-10 text-white">{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
