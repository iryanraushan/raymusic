import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import MusicPlayer from "../components/MusicPlayer";
import PlayListCard from "../components/PlayListCard";
PlayListCard;
const PlayList = () => {
  const [playlists, setPlaylists] = useState([]);

  const getHomePageData = async () => {
    const res = await axios.get(
      "https://saavn.me/modules?language=hindi,english"
    );
    const { data } = res.data;
    setPlaylists(data.playlists);
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="px-2">
        <div className="mb-6">
          <h2 className="text-[1.8rem] text-[#ebebeb] font-semibold  w-[80vw]   mx-auto mt-5">
            Top Playlists
          </h2>
        </div>

        <div className="flex justify-center mx-[5%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 gap-y-2 sm:gap-y-7 gap-x-6 ">
            {playlists?.map((playlists) => (
              <PlayListCard key={playlists.id} {...playlists} />
            ))}
          </div>
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default PlayList;
