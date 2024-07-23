import React, { useContext, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { TapeContext } from "../store/TapeContext";
import Example from "../assets/Example.json";

const Player = () => {
  const [playlist, setPlaylist] = useState(Example);
  const [currentSong, setCurrentSong] = useState(0);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { mixtapeState } = useContext(TapeContext);

  useEffect(() => {
    if (mixtapeState.playlist.length > 0) {
      setPlaylist(mixtapeState);
    } else {
      setPlaylist(Example);
    }
  }, [mixtapeState]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentSong((prevIndex) => (prevIndex + 1) % playlist.playlist.length);
  };

  const handlePrevious = () => {
    setCurrentSong((prevIndex) =>
      prevIndex === 0 ? playlist.playlist.length - 1 : prevIndex - 1
    );
  };

  const jumpPlay = (index) => {
    setCurrentSong(index);
    setIsPlaying(true);
  };

  return (
    <div className="player-container">
      <h2>{playlist.name}</h2>
      <p>by: {playlist.creator}</p>
      <ReactPlayer
        url={playlist.playlist[currentSong]?.url}
        playing={isPlaying}
        ref={playerRef}
        width="0"
        height="0"
        onEnded={handleNext}
      />
      <div className="currently-playing">
        <img style={{ border: "1px solid black" }} src="" alt="" />
        <div className="noneyet">
          <p>{playlist.playlist[currentSong]?.title}</p>
          <p>{playlist.playlist[currentSong]?.artist}</p>
        </div>
        <img src={playlist.playlist[currentSong]?.thumbnail} alt="" />
      </div>
      <div className="controls">
        <button onClick={handlePlay}>play</button>
        <button onClick={handlePause}>pause</button>
        <button onClick={handleNext}>next</button>
        <button onClick={handlePrevious}>previous</button>
      </div>
      <ul className="player-playlist">
        {playlist.playlist.map((song, index) => (
          <li key={index}>
            <div className="playlist-item">
              <button onClick={() => jumpPlay(index)}>play</button>
              <div className="playlist-item-text">
                <p>{song.title}</p>
                <p>{song.artist}</p>
              </div>
              <img src={song.thumbnail} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Player;
