import React from "react";

const SongSearchInput = () => {
  return (
    <div className="">
      <input
        type="text"
        name="Search"
        id="Search"
        className="py-2 rounded-full w-[40vw] text-center text-[#323336] bg-[#454545]"
        placeholder="Search for songs"
      />
    </div>
  );
};

export default SongSearchInput;
