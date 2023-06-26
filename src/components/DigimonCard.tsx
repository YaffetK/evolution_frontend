import React from "react";

type DigimonCardProps = {
  img: string | undefined;
  name: string;
};
const DigimonCard = ({ img, name }: DigimonCardProps) => {
  return (
    <div className="flex flex-col w-[400px] h-[400px] bg-gradient-to-b from-slate-blue-light to-slate-blue-dark relative items-center justify-center">
      <img src={img} alt="bild" />

      <h3 className="text-black text-2xl">{name}</h3>
    </div>
  );
};

export default DigimonCard;
