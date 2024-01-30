import React from "react";
import "../style/musicplayer.css";
const VolumeController = () => {
  return (
    <div className="absolute -rotate-90  rounded-lg -right-3 px-2 bottom-20">
      <input
        type="range"
        min={0}
        max={100}
        step={0.1}
        className="volume__input"
      />
    </div>
  );
};

export default VolumeController;
