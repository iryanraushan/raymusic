import React from "react";
import { Link } from "react-router-dom";

const PlayListCard = ({ title, id, image }) => {
  return (
    <div class="min-[360px]:w-[130px] rounded overflow-hidden  transition duration-300 ease-in-out hover:shadow-[0_5px_5px_rgb(105,105,105,0.12)]  dark:hover:shadow-black/30 hover:scale-110">
      <Link to={`/playlists/${id}`}>
        <img class="w-full" src={image[2].link} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <p class="text-[#ebebeb] text-[15px] text-center text-base whitespace-nowrap overflow-hidden overflow-ellipsis">
            {title.replace(/\(.*?\)/g, "").trim()}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PlayListCard;
