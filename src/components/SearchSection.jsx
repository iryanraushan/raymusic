import React, { useContext } from "react";
import MusicContext from "../context/MusicContext";
import SongItem from "./SongItem";

const SearchSection = () => {
  const { searchedSongs } = useContext(MusicContext);

  return (
    <div
      className={`fixed left-0 h-[85%] right-0 bottom-0 top-[62px] flex  justify-center 
      items-center flex-wrap  gap-6  bg-[#292929] bg-opacity-50 backdrop-blur-lg
       ${
         searchedSongs.length === 0 ? "-translate-y-[1200px]" : "translate-y-0"
       }`}
    >
      {searchedSongs?.map((song) => (
        <SongItem key={song.id} {...song} />
      ))}
    </div>
  );
};

export default SearchSection;
