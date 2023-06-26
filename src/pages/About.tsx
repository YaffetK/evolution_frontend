import React, { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import axios from "axios";
import DigimonList, { Digimon } from "../components/DigimonList";
import Pagination from "../components/Pagination";

const About: React.FC = () => {
  const [digimons, setDigimons] = useState<Digimon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  async function getAllDigimons() {
    try {
      const res = await axios.get("https://digimon-api.vercel.app/api/digimon");
      const { data } = res;

      setDigimons(data);
      console.log(digimons);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllDigimons();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;

  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = digimons.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="relative flex flex-col bg-transparent w-full justify-center items-center pl-10 bg-red-400 flex-1">
      {/* <h1 className="absolute top-0 left-1/3 mb-40">Detta är About Sidan</h1> */}
      {/* <DropDown options={[1, 2, 3, 4, 5, 6, 7, 8]} /> */}

      <div className="w-full h-full mt-24">
        <DigimonList digimons={currentPosts} />
        <Pagination
          totalPosts={digimons.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default About;
