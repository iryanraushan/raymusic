import React from "react";

const SongSearchInput = () => {
  return (
    <div className="">
      <input
        type="text"
        name="Search"
        id="Search"
        className="py-2 rounded-full w-[40vw] font-semibold text-center text-[#c5c5c5] bg-[#454545] focus:duration-300 "
        placeholder="Search for songs"
      />
    </div>
  );
};

export default SongSearchInput;
