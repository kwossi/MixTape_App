import React, { useContext } from "react";
import { TapeContext } from "../store/TapeContext";

const Sidebar = () => {
  const { mixtapeState, mixtapeDispatch } = useContext(TapeContext);
  return (
    <div className="sidebar-container">
      <h2>{mixtapeState.name}</h2>
      <p>{mixtapeState.creator}</p>
      {mixtapeState.playlist.length === 0 ? (
        <p>No songs added yet!</p>
      ) : (
        mixtapeState.playlist.map((song, index) => (
          <div className="playlist-item" key={index}>
            <div>{song.title}</div>
            <div>{song.artist}</div>
            <img src={song.thumbnail} />
            <button
              onClick={() =>
                mixtapeDispatch({ type: "DEL", payload: { song, index } })
              }
            >
              delete
            </button>
            <button>edit</button>
          </div>
        ))
      )}
      <button>Finish</button>
    </div>
  );
};

export default Sidebar;
