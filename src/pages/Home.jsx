import React from "react";
import NavBar from "../components/NavBar";
import MusicPlayer from "../components/MusicPlayer";
import MainSection from "../components/MainSection";

const Home = () => {
  return (
    <div>
      <NavBar />
      <MainSection />
      <MusicPlayer />
    </div>
  );
};

export default Home;
