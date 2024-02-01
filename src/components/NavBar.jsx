import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import SongSearchInput from "./SongSearchInput";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import SearchSection from "./SearchSection";

const NavBar = () => {
  return (
    <nav className="sticky top-0 w-[100%] bg-[#262626] shadow-[0_2px_7px_rgb(0,0,0,0.12)] h-[63px] flex items-center justify-between border-none lg:border left-0 right-0 px-3">
      {/* 1st div */}

      <div className="flex  justify-between md:flex-row items-center gap-2 sm:gap-4">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img
              src="/logo.png"
              alt="vibevault"
              width={70}
              className="opacity-[0.7] "
              loading="lazy"
            />
          </Link>
          <Link
            to={"/"}
            className="font-extrabold text-2xl text-white hidden md:block"
          >
            RayMusic
          </Link>
        </div>
        <div className=" md:flex-row   text-lg lg:text-lg  text-[#969ba1]">
          <div className="flex gap-">
            {/* <li className="list-none hover:cursor-pointer">Music</li> */}
            <Link to={`/playlists`}>
              <li className="list-none hover:cursor-pointer">Playlist</li>
            </Link>
            <li className="list-none text-red-300 cursor-not-allowed hidden md:block mx-6">
              Go Pro
            </li>
          </div>
        </div>
      </div>

      <div>
        <SongSearchInput />
      </div>

      <div className="lg:flex justify-between items-center ">
        {/* <div className="flex justify-center gap-2">
          <div className="flex flex-col text-sm">
            <span className="text-[12px] font-semibold text-[#969ba1]">
              Music Language
            </span>
            <span className="text-[#969ba1] text[14px]">Hindi</span>
          </div>
          <MdKeyboardArrowDown className="text-2xl text-[#969ba1] mt-2 " />
        </div> */}

        <div className="flex text-[#e2e1e1] font-semibold items-center">
          <li class="flex items-center hidden md:block">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://github.com/iryanraushan/"
              target="_blank"
            >
              <FaGithub className="lg:text-blueGray-200 text-blueGray-400 text-3xl leading-lg" />
            </a>
          </li>
          <li class="flex items-center hidden md:block">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://instagram.com/rryan_xd/"
              target="_blank"
            >
              <FaInstagram className="lg:text-blueGray-200 text-blueGray-400 text-3xl leading-lg" />
            </a>
          </li>{" "}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
