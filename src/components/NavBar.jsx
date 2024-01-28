import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import SongSearchInput from "./SongSearchInput";

const NavBar = () => {
  return (
    <nav className="w-auto shadow-[0_2px_7px_rgb(0,0,0,0.12)] px-7 h-[60px] flex items-center justify-between border-none lg:border top-0 left-0 right-0 z-20">
      {/* 1st div */}
      <div className="flex flex-col justify-between md:flex-row items-center gap-7">
        <div className="flex justify-between items-center">
          <img
            src="/logo.png"
            alt="vibevault"
            width={80}
            className="opacity-[0.7]"
          />
          <Link href="/" className="font-extrabold text-2xl text-white ">
            VibeVault
          </Link>
        </div>
        <div className="hidden lg:block md:flex-row text-lg lg:text-lg  text-[#969ba1]">
          <div className="flex gap-6">
            <li className="list-none hover:cursor-pointer">Music</li>
            <li className="list-none hover:cursor-pointer">Podcast</li>
            <li className="list-none hover:cursor-pointer">Go Pro</li>
          </div>
        </div>
      </div>

      <div>
        <SongSearchInput />
      </div>

      <div className="hidden lg:flex justify-between items-center gap-7">
        <div className="flex justify-center gap-2">
          <div className="flex flex-col text-sm">
            <span className="text-[12px] font-semibold text-[#969ba1]">
              Music Language
            </span>
            <span className="text-[#969ba1] text[14px]">Hindi</span>
          </div>
          <MdKeyboardArrowDown className="text-2xl text-[#969ba1] mt-2 " />
        </div>

        <div className="flex text-[15px] gap-5 text-[#e2e1e1] font-semibold">
          <li className="list-none text-[18px]">Log In</li>
          <li className="list-none text-[18px]">Sign Up</li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
