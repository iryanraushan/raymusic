import axios from "axios";
import React from "react";
import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const SongSearchInput = () => {
  const { setSearchedSongs } = useContext(MusicContext);

  const searchSongs = async (e) => {
    if (e.target.value.trim() !== "") {
      const res = await axios.get(
        `https://saavn.me/search/songs?query=${e.target.value}&page=1&limit=2`
      );

      const { data } = res.data;
      const results = data.results;
      if (results === 0) {
        setSearchedSongs([]);
      } else {
        setSearchedSongs(results);
      }
      console.log(results);
    } else {
      setSearchedSongs([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="Search"
        id="Search"
        className="py-2 rounded-full w-[30vw] font-semibold text-center text-[#c5c5c5] bg-[#454545] focus:duration-300 "
        placeholder="Search for songs"
        autoComplete="off"
        autoCorrect="off"
        onChange={searchSongs}
      />
    </div>
  );
};

export default SongSearchInput;
