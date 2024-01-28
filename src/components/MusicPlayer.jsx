import React from "react";
import { BiRepeat } from "react-icons/bi";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { LuDownload } from "react-icons/lu";
import "../style/musicplayer.css";

const MusicPlayer = () => {
  return (
    <div className="fixed right-0 left-0 flex flex-col bottom-0 h-[90px] shadow__css">
      <div className="upper__player__range">
        <input
          type="range"
          name="progress"
          min={0}
          max={100}
          step={0.1}
          range
          className="input__upper"
        />
      </div>
      <div className="flex justify-between items-center mb-3 px-8">
        <div className="flex justify-start items-center gap-3 lg:w-[25vw]">
          <img
            src="https://c.saavncdn.com/274/Rockstar-2011-50x50.jpg"
            alt=""
            width={55}
            className="rounded-lg"
          />
          <div className="hidden lg:block text-[#969ba1]">
            <span className="text-white font-semibold text-lg">
              Lorem ipsum
            </span>
            <p className="text-[13px]">Lorem ipsum dolor sit.</p>
          </div>
        </div>

        <div className="flex text-xl lg:text-2xl lg:gap-6 lg:w-[50vw] justify-center">
          <div className="flex flex-col items-center">
            <div className="flex gap-8 justify-center text-xl">
              <BiRepeat className="text-[#a3a3a3] hover:text-[#dfdfdf] hover:cursor-pointer" />
              <IoMdSkipBackward className="text-[#a3a3a3] hover:text-[#ffffff]  hover:cursor-pointer" />
              <FaPlay className="text-[#a3a3a3]  hover:text-[#ffffff]  hover:cursor-pointer" />
              <IoMdSkipForward className="text-[#a3a3a3] hover:text-[#ffff]  hover:cursor-pointer" />
              <PiShuffleBold className="text-[#a3a3a3]  hover:text-[#fffff]  hover:cursor-pointer" />
            </div>
            <div className="lower__player__range">
              <input
                type="range"
                name="progress"
                min={0}
                max={100}
                step={0.1}
                range
                className="range"
              />
            </div>
          </div>
        </div>

        <div className="flex lg:w-[25vw] justify-end items-center gap-8">
          <LuDownload className="text-2xl text-[#a3a3a3]  lg:text-3xl" />
          <HiSpeakerWave className="text-2xl text-[#a3a3a3]  lg:text-3xl hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
