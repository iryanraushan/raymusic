import React from "react";
import { Link } from "react-router-dom";
const MusicAlbumCard = ({ name, artists, id, image }) => {
  return (
    <Link
      to={`/albums/${id}`}
      className="w-[200px] max-h-[260px] overflow-y-clip flex flex-col justify-center items-center rounded-lg  transition duration-300 ease-in-out hover:shadow-[0_5px_5px_rgb(105,105,105,0.12)]  dark:hover:shadow-black/30 hover:scale-110"
    >
      <img src={image[2].link} alt="" className="rounded-t-md" />
      <div className="text-[14px] font-semibold flex w-full flex-col justify-center items-center px-5 mt-3  mb-5">
        <span className="text-[#e6e6e6] text-[16px]">
          {name.replace(/\(.*?\)/g, "").trim()}
        </span>
        <p className="font-thin text-xs text-[#969ba1] text-center mb-5">
          {artists
            ?.map((artists) => artists.name)
            .join(", ")
            .split(",")
            .slice(0, 2)
            .join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default MusicAlbumCard;

// <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
//   <article
//     className="mx-auto max-w-sm shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group"
//     style={{ backgroundImage: `url(${image[2].link})` }}
//   >
//     <div class="bg-black bg-opacity-20 min-h-28 px-5 flex flex-wrap flex-col pt-20 hover:bg-opacity-75 transform duration-300">
//       <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
//         {name}
//       </h1>
//       <div class="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
//       <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
//         {artists?.map((artists) => artists.name).join(", ")}
//       </p>
//     </div>
//   </article>
// </section>;
