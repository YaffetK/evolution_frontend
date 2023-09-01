import React, { useEffect, useState } from "react";
import DigimonInfo from "../components/DigimonFolder/DigimonInfo";
import axios from "axios";
import DigimonList, { Digimon } from "../components/DigimonFolder/DigimonList";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";

const About: React.FC = () => {
  const [digimons, setDigimons] = useState<Digimon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [isDigimonCardPressed, setIsDigimonCardPressed] = useState(false);

  async function getAllDigimons() {
    try {
      const res = await axios.get(
        "https://digimon-api.vercel.app/api/digimon/"
      );
      const { data } = res;

      setDigimons(data);
      console.log(digimons);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setPostsPerPage(20);
    getAllDigimons();
  }, []);

  const handleClicks = (): void => {
    setIsDigimonCardPressed(!isDigimonCardPressed);
  };

  const lastPostIndex = currentPage * postsPerPage;

  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = digimons.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {isDigimonCardPressed ? (
        <div className="flex justify-center items-center">
          <DigimonInfo handleClicks={handleClicks} />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="relative flex flex-col bg-transparent w-full justify-center items-center pl-10 bg-red-400 flex-1">
            <div className="w-full h-full mt-24">
              <DigimonList
                digimons={currentPosts}
                handleClicks={handleClicks}
              />
              <Pagination
                totalPosts={digimons.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About;
