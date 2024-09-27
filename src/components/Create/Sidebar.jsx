import React, { useContext } from "react";
import { TapeContext } from "../../store/TapeContext.jsx";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { FaAnglesRight, FaShareNodes } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { decodeHTML } from "../../helpers.js";

const Sidebar = () => {
  const { mixtapeState, mixtapeDispatch } = useContext(TapeContext);

  const handleEdit = (index, field, value) => {
    mixtapeDispatch({ type: "EDIT", payload: { index, field, value } });
  };
  const navigate = useNavigate();

  return (
    <div className="sidebar-wrapper">
      {mixtapeState.isToggled && (
        <button
          className="toggle-out-button"
          onClick={() => mixtapeDispatch({ type: "TOGGLE" })}
        >
          <FaAnglesRight />
        </button>
      )}
      {mixtapeState.isToggled && (
        <div className="sidebar-container">
          <h2>{mixtapeState.name}</h2>
          <p>{mixtapeState.creator}</p>
          {mixtapeState.playlist.length === 0 ? (
            <p>No songs added yet!</p>
          ) : (
            mixtapeState.playlist.map((song, index) => (
              <div className="sidebar-item" key={index}>
                <button
                  className="sidebar-button"
                  name="artist"
                  onClick={() =>
                    mixtapeDispatch({ type: "DEL", payload: { song, index } })
                  }
                >
                  <TiDelete />
                </button>
                <div className="sidebar-inputs">
                  <input
                    type="text"
                    value={decodeHTML(song.title)}
                    onChange={(e) => handleEdit(index, "title", e.target.value)}
                  />
                  <input
                    type="text"
                    value={decodeHTML(song.artist)}
                    onChange={(e) =>
                      handleEdit(index, "artist", e.target.value)
                    }
                  />
                </div>
                <img src={song.thumbnail} />
              </div>
            ))
          )}
          <div className="sidebar-footer">
            <button
              className="sidebar-button"
              onClick={() => navigate("/listen")}
            >
              <FaPlay />
            </button>
            <button
              className="sidebar-button"
              onClick={() => navigate("/share")}
            >
              <FaShareNodes />
            </button>
            <button
              className="sidebar-button"
              onClick={() => mixtapeDispatch({ type: "DELALL" })}
            >
              <MdDelete />
            </button>
          </div>
          <div className="sidebar-help">
            <p>Click on titles and artists to edit them.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
