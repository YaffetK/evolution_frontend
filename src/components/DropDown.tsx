import React, { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="w-[150px] h-[150px] bg-black">
      <button
        onClick={() => setIsopen(!isOpen)}
        className="bg-white rounded-md w-full h-full"
      >
        {" "}
        DropDown
      </button>

      {isOpen && (
        <div className="bg-white z-10">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
