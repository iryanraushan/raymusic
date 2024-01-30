import React from "react";
import { Link } from "react-router-dom";

const PlayListCard = ({ title, id, image }) => {
  return (
    <Link
      to={`/playlists/${id}`}
      className="w-[200px] max-h-[260px] overflow-y-clip flex flex-col justify-center items-center rounded-lg  transition duration-300 ease-in-out hover:shadow-[0_5px_5px_rgb(105,105,105,0.12)]  dark:hover:shadow-black/30 hover:scale-110"
    >
      <img src={image[2].link} alt="" className="rounded-t-md" />
      <div className="text-[14px] font-semibold flex w-full flex-col justify-center items-center px-5 mt-3  mb-5">
        <span className="text-[#e6e6e6] text-[17px]">{title}</span>
      </div>
    </Link>
  );
};

export default PlayListCard;
