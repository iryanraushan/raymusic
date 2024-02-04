import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const AboutMe = () => {
  return (
    <div>
      <div className="w-96 bg-[#292929] rounded-xl shadow-[0_2px_7px_rgb(125,125,125,0.12)] py-2 transition duration-300 ease-in-out  cursor-pointer z-[1000] mx-auto my-auto">
        <div className="h-80">
          <img
            src="https://avatars.githubusercontent.com/u/83304272?v=4"
            alt="profile-picture"
            className="w-[350px] h-[310px] mx-auto rounded-lg object-cover"
          />
        </div>
        <div className="text-center text-[#eeeeee] text-lg">
          <div className="mb-2 font-bold">RAUSHAN KUMAR</div>
          <div className="font-medium text-[15px]">Software Developer</div>
        </div>
        <div className="flex text-[#e2e1e1] font-semibold items-center justify-center">
          <li className="flex items-center ">
            <a
              className="hover:text-orange-500/95 duration-500 lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://github.com/iryanraushan/"
              target="_blank"
            >
              <FaGithub className="lg:text-blueGray-200 text-blueGray-400 text-3xl leading-lg" />
            </a>
          </li>
          <li className="flex items-center">
            <a
              className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://instagram.com/rryan_xd/"
              target="_blank"
            >
              <FaInstagram className="hover:text-orange-500/95 duration-500 lg:text-blueGray-200 text-blueGray-400 text-3xl leading-lg" />
            </a>
          </li>{" "}
          <li className="flex items-center">
            <a
              className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://instagram.com/rryan_xd/"
              target="_blank"
            >
              <AiFillLinkedin className="text-3xl leading-lg hover:text-orange-500/95 duration-500" />
            </a>
          </li>{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
