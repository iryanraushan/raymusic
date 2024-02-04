import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlbumDetails from "./pages/AlbumDetails";
import MusicContext from "./context/MusicContext";
import PlaylistDetails from "./pages/PlayListDetails";
import PlayList from "./pages/PlayList";
import About from "./pages/About";

function App() {
  const [songs, setSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [searchedSongs, setSearchedSongs] = useState([]);
  const playMusic = async (
    music,
    name,
    duration,
    image,
    id,
    primaryArtists
  ) => {
    if (currentSong && currentSong.id === id) {
      if (isPlaying) {
        setIsPlaying(false);
        await currentSong.audio.pause();
      } else {
        setIsPlaying(true);
        await currentSong.audio.play();
      }
    } else {
      if (currentSong) {
        currentSong.audio.pause();
        setIsPlaying(false);
      }

      const newAudio = new Audio(music[4].link);
      setCurrentSong({
        name,
        duration,
        image: image[2].link,
        id,
        audio: newAudio,
        primaryArtists,
      });
      setIsPlaying(true);
      await newAudio.play();
    }
  };

  const nextSong = () => {
    if (currentSong && Array.isArray(songs)) {
      const index = songs.findIndex((song) => song.id === currentSong.id);

      if (index !== -1) {
        if (index === songs.length - 1) {
          const { downloadUrl, name, duration, image, id, primaryArtists } =
            songs[0];
          playMusic(downloadUrl, name, duration, image, id, primaryArtists);
        } else {
          const { downloadUrl, name, duration, image, id, primaryArtists } =
            songs[index + 1];
          playMusic(downloadUrl, name, duration, image, id, primaryArtists);
        }
      } else {
        console.error("Current song not found in the songs array.");
      }
    } else {
      console.error("Invalid currentSong or songs array.");
    }
  };

  const prevSong = () => {
    if (currentSong && Array.isArray(songs)) {
      const index = songs.findIndex((song) => song.id === currentSong.id);

      if (index !== -1) {
        if (index === 0) {
          const { downloadUrl, name, duration, image, id, primaryArtists } =
            songs[songs.length - 1];
          playMusic(downloadUrl, name, duration, image, id, primaryArtists);
        } else {
          const { downloadUrl, name, duration, image, id, primaryArtists } =
            songs[index - 1];
          playMusic(downloadUrl, name, duration, image, id, primaryArtists);
        }
      } else {
        console.error("Current song not found in the songs array.");
      }
    } else {
      console.error("Invalid currentSong or songs array.");
    }
  };

  return (
    <MusicContext.Provider
      value={{
        songs,
        setSongs,
        playMusic,
        isPlaying,
        currentSong,
        nextSong,
        prevSong,
        setSearchedSongs,
        searchedSongs,
      }}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />
          <Route path="/playlists" element={<PlayList />} />
          <Route path="/about" element={<About />} />
          <Route path="/playlists/:id" element={<PlaylistDetails />} />
        </Routes>
      </HashRouter>
    </MusicContext.Provider>
  );
}

export default App;
