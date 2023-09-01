import DigimonCard from "./DigimonCard";

export type Digimon = {
  name: string;
  img: string;
  level: string;
};

const DigimonList = ({
  digimons,
  handleClicks,
}: {
  digimons: Digimon[];
  handleClicks: () => void;
}) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {digimons.map((d) => (
        <DigimonCard
          key={d.name}
          img={d.img}
          level={d.level}
          name={d.name}
          handleClicks={handleClicks}
        />
      ))}
    </div>
  );
};

export default DigimonList;
