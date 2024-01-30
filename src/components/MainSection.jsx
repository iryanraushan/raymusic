import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Slider from "./Slider";
import SliderCopy from "./Slidercopy";

const MainSection = () => {
  const [albums, setAlbums] = useState([]);
  const [trending, setTrending] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const getHomePageData = async () => {
    const res = await axios.get(
      "https://saavn.me/modules?language=hindi,english"
    );
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
    <section className="my-6">
      <div>
        <h2 className="text-[1.8rem] -mb-6  text-[#ebebeb] font-semibold  w-[75vw] mx-auto">
          Trending Now
        </h2>
      </div>
      <Slider data={trendingAlbums} />

      <div>
        <h2 className="text-[1.8rem] -mb-6 text-[#ebebeb] font-semibold  w-[75vw] mx-auto">
          Top Albums
        </h2>
        <Slider data={albums} />
      </div>

      <div>
        <h2 className="text-[1.8rem] -mb-6 text-[#ebebeb] font-semibold  w-[75vw] mx-auto">
          Top Playlists
        </h2>
        <SliderCopy data={playlists} />
      </div>
    </section>
  );
};

export default MainSection;
