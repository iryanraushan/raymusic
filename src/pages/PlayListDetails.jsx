import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import MusicContext from "../context/MusicContext";
import NavBar from "../components/NavBar";
import MusicPlayer from "../components/MusicPlayer";
import SongList from "../components/SongList";

const PlaylistDetails = () => {
  const { id } = useParams();

  const { setSongs } = useContext(MusicContext);
  const [playlists, setPlaylists] = useState([]); // Fix 1: Use useState instead of {}
  const [image, setImage] = useState([]); // Fix 1: Use useState instead of {}

  const getPlayLists = async () => {
    try {
      const res = await axios.get(`https://saavn.me/playlists?id=${id}`);
      const { data } = await res.data; // Fix 2: Remove extra await
      setSongs(data.songs);
      setPlaylists(data);
      setImage(getImg(data.image));
    } catch (error) {
      console.error("Error fetching playlist details:", error);
    }
  };

  const getImg = (image) => (image = image[2].link);

  useEffect(() => {
    getPlayLists();
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center gap-8 py-6 px-6">
        <div className="flex gap-10 items-center flex-col md:flex-row md:w-[80%] lg:w-auto">
          <img
            src={image}
            className="mx-auto rounded-lg h-52 sm:h-56 md:h-60 lg:h-64"
          />
          <div className=" w-[260px] text-[#cdcccc] gap-4 flex flex-col text-xl font-semibold ">
            <h1>{playlists.name}</h1>
            <p className="text-[#8b8a8a] text-end">
              {playlists.songCount + " "} Songs |
              {" " + playlists.fanCount + " "} Fans
            </p>
          </div>
        </div>

        <div>
          {playlists.songs?.map((songs) => (
            <SongList key={songs.id} {...songs} />
          ))}
        </div>
      </div>
      <MusicPlayer />
    </>
  );
};

export default PlaylistDetails;
