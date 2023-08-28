import React from "react";

type DigimonCardProps = {
  img: string | undefined;
  name: string;
  level: string;
  handleClicks: () => void;
};
const DigimonCard = ({ img, name, handleClicks }: DigimonCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        onClick={handleClicks}
        className="flex flex-col w-[400px] h-[440px] object-cover bg-gradient-to-b from-slate-blue-light to-slate-blue-dark transition-transform 
      delay-150 ease-in-out hover:scale-100 relative items-center justify-center shadow-lg rounded-lg duration-300
     hover:transform hover:-translate-x-1 hover:cursor-pointer"
        src={img}
        alt="bild"
      />

      <h3 className="text-black font-serif text-2xl">{name}</h3>
    </div>
  );
};

export default DigimonCard;
