import React, { useContext, useEffect, useRef } from "react";
import { BiCaretRightCircle } from "react-icons/bi";
import { BiPauseCircle } from "react-icons/bi";

import MusicContext from "../context/MusicContext";
import "../style/playeffect.scss";

const SongList = ({
  name,
  primaryArtists,
  duration,
  downloadUrl,
  image,
  id,
}) => {
  const convertTime = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

    if (seconds >= 10) {
      return `${"0" + minutes}:${seconds}`;
    }

    return `${"0" + minutes}:${seconds + "0"}`;
  };

  const playMusicRef = useRef(null);

  const { isPlaying, currentSong, playMusic } = useContext(MusicContext);

  useEffect(() => {
    if (isPlaying && currentSong?.id === id) {
      playMusicRef.current.classList.add("playing-effect");
    } else {
      playMusicRef.current.classList.remove("playing-effect");
    }
  }, [isPlaying, currentSong, id]);

  return (
    <div
      className={`flex rounded-lg justify-between items-center w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mb-2  p-2 px-4  py-2 transition duration-300 ease-in-out shadow-sm shadow-black/20   hover:bg-[#474747] ${
        id === currentSong?.id && "bg-[#474747]"
      }`}
    >
      {isPlaying && id === currentSong?.id ? (
        <BiPauseCircle
          className={`text-3xl text-[#e5e5e5] transition-all ease-in-out duration-300 cursor-pointer mr-5 ${
            id === currentSong?.id && "text-[#ffa500]"
          }`}
          onClick={() =>
            playMusic(downloadUrl, name, duration, image, id, primaryArtists)
          }
        />
      ) : (
        <BiCaretRightCircle
          className={`text-3xl mr-5 text-[#e5e5e5] transition-all ease-in-out duration-300 cursor-pointer ${
            id === currentSong?.id && "text-[#ffa500]"
          }`}
          onClick={() =>
            playMusic(downloadUrl, name, duration, image, id, primaryArtists)
          }
        />
      )}

      <div className=" text-[#d0d0d0] flex flex-col gap-2 sm:flex-row justify-between items-center w-[85%]">
        <span
          className={`font-bold flex items-center text-sm ${
            id === currentSong?.id && "text-[#ffa500]"
          }`}
          ref={playMusicRef}
        >
          {name.replace(/\(.*?\)/g, "").trim()}
          {isPlaying && id === currentSong?.id && (
            <div id="player__vibe">
              <div className="icon__rel ml-5">
                <span className="span__rel" />
                <span className="span__rel" />
                <span className="span__rel" />
              </div>
            </div>
          )}
        </span>
        <span className="font-thin text-[#a0a0a0] w-[150px] sm:w-auto w-250 whitespace-nowrap overflow-hidden overflow-ellipsis">
          {primaryArtists.split(",").slice(0, 4).join(", ")}
        </span>
      </div>

      <div>
        <span className="text-white hidden md:block mx-6">
          {convertTime(duration)}
        </span>
      </div>
    </div>
  );
};

export default SongList;
