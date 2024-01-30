import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import MusicPlayer from "../components/MusicPlayer";
import PlayListCard from "../components/PlayListCard";

const PlayList = () => {
  const [albums, setAlbums] = useState([]);
  const [trending, setTrending] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const getHomePageData = async () => {
    const res = await axios.get("https://saavn.me/modules?language=hindi");
    const { data } = res.data;
    setAlbums(data.albums);
    setTrending(data.trending);
    setPlaylists(data.playlists);
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  const trendingAlbums = useMemo(
    () => (Array.isArray(trending.albums) ? trending.albums : []),
    [trending.albums]
  );

  return (
    <div>
      <NavBar />
      <div className="">
        <div className="mb-6">
          <h2 className="text-[1.8rem] text-[#ebebeb] font-semibold  w-[85vw] mx-auto mt-5">
            Top Playlists
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5  xl:grid-cols-6 px-5 gap-6 w-[90%] mx-auto">
          {playlists?.map((playlists) => (
            <PlayListCard key={playlists.id} {...playlists} />
          ))}
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default PlayList;
