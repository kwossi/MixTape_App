import React, { useContext, useState } from "react";
import { TapeContext } from "../store/TapeContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { mixtapeState, mixtapeDispatch } = useContext(TapeContext);

  const handleEdit = (index, field, value) => {
    mixtapeDispatch({ type: "EDIT", payload: { index, field, value } });
  };
  const navigate = useNavigate();

  return (
    <div>
      {mixtapeState.isToggled && (
        <div className="sidebar-container">
          <button onClick={() => mixtapeDispatch({ type: "TOGGLE" })}>
            toggle
          </button>
          <h2>{mixtapeState.name}</h2>
          <p>{mixtapeState.creator}</p>
          {mixtapeState.playlist.length === 0 ? (
            <p>No songs added yet!</p>
          ) : (
            mixtapeState.playlist.map((song, index) => (
              <div className="playlist-item" key={index}>
                <div>
                  <input
                    type="text"
                    value={song.title}
                    onChange={(e) => handleEdit(index, "title", e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={song.artist}
                    onChange={(e) =>
                      handleEdit(index, "artist", e.target.value)
                    }
                  />
                </div>
                <img src={song.thumbnail} />
                <button
                  name="artist"
                  onClick={() =>
                    mixtapeDispatch({ type: "DEL", payload: { song, index } })
                  }
                >
                  delete
                </button>
              </div>
            ))
          )}
          <button onClick={() => navigate("/listen")}>Play</button>
          <button onClick={() => navigate("/share")}>Share</button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
