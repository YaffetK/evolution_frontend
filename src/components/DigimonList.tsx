import { useState, useEffect } from "react";
import axios from "axios";
import DigimonCard from "./DigimonCard";

export type Digimon = {
  name: string;
  img: string;
  level: string;
};

const DigimonList = ({ digimons }: { digimons: Digimon[] }) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {digimons.map((d) => (
        <DigimonCard img={d.img} name={d.name} />
      ))}
    </div>
  );
};

export default DigimonList;
