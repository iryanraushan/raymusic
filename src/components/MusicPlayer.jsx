import React, { useContext, useEffect, useRef, useState } from "react";
import { BiRepeat } from "react-icons/bi";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { LuDownload } from "react-icons/lu";
import MusicContext from "../context/MusicContext";
import "../style/musicplayer.css";

const MusicPlayer = () => {
  const { currentSong, playMusic, isPlaying, nextSong, prevSong } =
    useContext(MusicContext);

  const [progressBar, setProgressBar] = useState(0);

  const inputRef = useRef(null);

  const handleProgressChange = (event) => {
    const newPercentage = parseFloat(event.target.value);
    const newTime = (newPercentage / 100) * Number(currentSong.duration);
    if (newTime >= 0) {
      currentSong.audio.currentTime = newTime;
    }
  };

  useEffect(() => {
    if (currentSong) {
      const audioElement = currentSong.audio;
      const handleUpdate = () => {
        const duration = Number(currentSong.duration);
        const currentTime = audioElement.currentTime;
        const newTiming = (currentTime / duration) * 100;

        setProgressBar(newTiming);
      };

      const handleNextSong = () => nextSong();

      audioElement.addEventListener("timeupdate", handleUpdate);
      audioElement.addEventListener("ended", handleNextSong);
      return () => {
        audioElement.addEventListener("timeupdate", handleUpdate);
        audioElement.addEventListener("ended", handleNextSong);
      };
    }
  }, [currentSong]);

  const handleDownloadSong = async (url) => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${currentSong.name}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log(`download error, ${error}`);
    }
  };

  const downloadConfirm = () => {
    const choice = confirm("are you sure you want to download this song ?");
    if (choice) {
      handleDownloadSong();
    } else {
      return;
    }
  };

  return (
    <div className="fixed bottom-0 right-0 left-0 flex flex-col h-[90px] shadow__css">
      <div className="upper__player__range">
        <input
          type="range"
          name="progress"
          min={0}
          max={100}
          step={0.1}
          value={progressBar}
          ref={inputRef}
          onChange={handleProgressChange}
          className="input__upper"
        />
      </div>

      <div className="flex justify-between items-center px-8 musicplayer gap-1 ">
        <div className="flex justify-start items-center gap-3">
          <img
            src={currentSong?.image}
            width={55}
            className="rounded-lg"
            loading="lazy"
          />
          <div className="hidden sm:block text-[#969ba1]">
            <span className="text-white font-semibold text-lg whitespace-nowrap overflow-hidden overflow-ellipsis">
              {currentSong?.name.replace(/\(.*?\)/g, "").trim()}
            </span>
            <p className="text-[13px] whitespace-nowrap overflow-hidden overflow-ellipsis w-[235px]">
              {currentSong?.primaryArtists}
            </p>
          </div>
        </div>

        <div className="flex text-xl lg:text-2xl  md:w-[50vw] justify-center">
          <div className="flex flex-col items-center">
            <div className="flex gap-8 justify-center items-center text-xl">
              {/* <BiRepeat className="text-[#a3a3a3] hover:text-[#dfdfdf] hover:cursor-pointer" /> */}
              <IoMdSkipBackward
                className="text-[#a3a3a3] hover:text-[#ffffff]  hover:cursor-pointer"
                onClick={prevSong}
              />

              {isPlaying ? (
                <FaPause
                  className="text-3xl  text-[#a3a3a3] hover:text-[#ffff]  hover:cursor-pointer"
                  onClick={() =>
                    playMusic(
                      currentSong.audio,
                      currentSong.name,
                      currentSong.duration,
                      currentSong.image,
                      currentSong.id
                    )
                  }
                />
              ) : (
                <FaPlay
                  className=" text-3xl  text-[#a3a3a3] hover:text-[#ffff]  hover:cursor-pointer"
                  onClick={() =>
                    playMusic(
                      currentSong.audio,
                      currentSong.name,
                      currentSong.duration,
                      currentSong.image,
                      currentSong.id
                    )
                  }
                />
              )}

              <IoMdSkipForward
                className="text-[#a3a3a3] hover:text-[#ffff]  hover:cursor-pointer"
                onClick={nextSong}
              />
              {/* <PiShuffleBold className="text-[#a3a3a3]  hover:text-[#ffff]  hover:cursor-pointer" /> */}
            </div>
            <div className="lower__player__range">
              <input
                type="range"
                name="progress"
                min={0}
                max={100}
                step={0.1}
                value={progressBar}
                ref={inputRef}
                onChange={handleProgressChange}
                className="range__player"
              />
            </div>
          </div>
        </div>

        <div className="flex  justify-end items-center gap-8">
          <LuDownload
            className="text-2xl text-[#a3a3a3]  lg:text-3xl cursor-pointer"
            onClick={downloadConfirm}
          />
          <HiSpeakerWave className="text-2xl text-[#a3a3a3]  lg:text-3xl hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
