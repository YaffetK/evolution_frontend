import React from "react";

const DigimonInfo = ({ handleClicks }: { handleClicks: () => void }) => {
  return (
    <div className="flex flex-col bg-slate-400 text-2xl w-2/3 h-[500px] justify-center items-center mt-40">
      <h2 className="">This will Be the information about the Digimon</h2>
      <button
        onClick={handleClicks}
        className="bg-blue text-white w-40 h-20 rounded-2xl"
      >
        Close
      </button>
    </div>
  );
};

export default DigimonInfo;
