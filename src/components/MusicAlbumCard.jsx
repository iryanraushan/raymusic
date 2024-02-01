import React from "react";
import { Link } from "react-router-dom";
const MusicAlbumCard = ({ name, id, image }) => {
  return (
    <Link
      to={`/albums/${id}`}
      className="w-[200px] max-h-[260px] overflow-y-clip flex flex-col justify-center items-center rounded-lg  transition duration-300 ease-in-out hover:shadow-[0_5px_5px_rgb(105,105,105,0.12)]  dark:hover:shadow-black/30 hover:scale-110"
    >
      <img src={image[2].link} alt="" className="rounded-t-md" loading="lazy" />
      <div className="text-[14px] font-semibold flex w-full flex-col justify-center items-center px-5 mt-3  mb-5">
        <span className="text-[#e6e6e6] text-[15px] text-center w-[100%] font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis">
          {name.replace(/\(.*?\)/g, "").trim()}
        </span>
      </div>
    </Link>
  );
};

export default MusicAlbumCard;
