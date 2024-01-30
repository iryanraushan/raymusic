import React, { useRef } from "react";

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import "../style/slider-trnding.css";
import MusicAlbumCard from "./MusicAlbumCard";

const Slider = ({ data }) => {
  const scrollRef = useRef(null);
  const scrollRight = () => {
    scrollRef.current.scrollLeft += 400;
  };
  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 400;
  };

  return (
    <div className="flex justify-center items-center gap-1">
      <MdOutlineKeyboardArrowLeft
        className="text-3xl text-gray-200 hover:scale-125 duration-500 ease-in-out cursor-pointer hidden lg:block"
        onClick={scrollLeft}
      />

      <div
        className="grid grid-rows-2 p-6 grid-flow-col-dense justify-between items-center gap-6 overflow-x-scroll lg:w-[78vw] slider__trending m-20 my-7"
        ref={scrollRef}
      >
        {data?.map((album) => (
          <MusicAlbumCard key={album.id} {...album} />
        ))}
      </div>

      <MdOutlineKeyboardArrowRight
        className="text-3xl text-gray-200 hover:scale-125 duration-500 ease-in-out cursor-pointer hidden lg:block"
        onClick={scrollRight}
      />
    </div>
  );
};

export default Slider;
