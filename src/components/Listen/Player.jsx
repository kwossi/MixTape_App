import React, { useContext, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { TapeContext } from "../../store/TapeContext";
import Example from "../../assets/Example.json";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa6";
import { decodeHTML } from "../../helpers.js";

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
        <div className="speaker">
          {isPlaying ? (
            <div className="speaker-inside-active"></div>
          ) : (
            <div className="speaker-inside"></div>
          )}
        </div>
        <div className="noneyet">
          <p className="title">
            {decodeHTML(playlist.playlist[currentSong]?.title)}
          </p>
          <p className="artist">
            {decodeHTML(playlist.playlist[currentSong]?.artist)}
          </p>
        </div>
        <div className="speaker">
          {isPlaying ? (
            <div className="speaker-inside-active"></div>
          ) : (
            <div className="speaker-inside"></div>
          )}
        </div>
      </div>
      <div className="controls">
        <button className="control-button" onClick={handlePlay} title="play">
          <FaPlay />
        </button>
        <button className="control-button" onClick={handlePause} title="pause">
          <FaPause />
        </button>
        <button
          className="control-button"
          onClick={handlePrevious}
          title="previous song"
        >
          <FaBackward />
        </button>
        <button
          className="control-button"
          onClick={handleNext}
          title="next song"
        >
          <FaForward />
        </button>
      </div>
      <ul className="player-playlist">
        {playlist.playlist.map((song, index) => (
          <li key={index}>
            <div
              className={
                index === currentSong
                  ? "playlist-item playing"
                  : "playlist-item"
              }
            >
              <button
                className="playlist-button"
                title="play"
                onClick={() => jumpPlay(index)}
              >
                <FaPlay />
              </button>
              <div className="playlist-item-text">
                <p className="title">{decodeHTML(song.title)}</p>
                <p className="artist">{decodeHTML(song.artist)}</p>
              </div>
              <div className="playlist-thumbnail">
                <img src={song.thumbnail} alt="" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Player;
