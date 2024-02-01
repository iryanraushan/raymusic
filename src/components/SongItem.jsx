import React, { useContext } from "react";
import MusicContext from "../context/MusicContext";

const SongItem = ({
  name,
  image,
  duration,
  downloadUrl,
  id,
  primaryArtists,
}) => {
  const { playMusic } = useContext(MusicContext);
  return (
    <div className="w-[200px] md:w-[200px] lg:w-[220px] rounded overflow-hidden  transition duration-300 ease-in-out hover:shadow-[0_5px_5px_rgb(105,105,105,0.12)]  dark:hover:shadow-black/30 hover:scale-110">
      <img
        src={image[2].link}
        className="rounded-md cursor-pointer"
        onClick={() =>
          playMusic(downloadUrl, name, duration, image, id, primaryArtists)
        }
        loading="lazy"
      />
      <div className="px-6 py-4">
        <p className="text-[#ebebeb] text-[15px] text-center text-base whitespace-nowrap overflow-hidden overflow-ellipsis">
          {name.replace(/\(.*?\)/g, "").trim()}{" "}
        </p>
      </div>
    </div>
  );
};

export default SongItem;
