import React from "react";
import NavBar from "../components/NavBar";
import MusicPlayer from "../components/MusicPlayer";
import MainSection from "../components/MainSection";
import SearchSection from "../components/SearchSection";

const Home = () => {
  return (
    <div>
      <NavBar />
      <SearchSection />
      <MainSection />
      <MusicPlayer />
    </div>
  );
};

export default Home;
