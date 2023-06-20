import React from "react";
import DropDown from "../components/DropDown";

const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-red-500 h-full w-full justify-center">
      <h1 className="absolute top-0 left-1/3">Detta är About Sidan</h1>
      <DropDown />
    </div>
  );
};

export default About;
