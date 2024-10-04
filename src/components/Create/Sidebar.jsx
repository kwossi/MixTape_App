import React, { useContext, useRef } from "react";
import { TapeContext } from "../../store/TapeContext.jsx";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { FaAnglesRight, FaShareNodes } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { MdDelete, MdEdit } from "react-icons/md";
import { decodeHTML } from "../../helpers.js";

const Sidebar = () => {
  const { mixtapeState, mixtapeDispatch } = useContext(TapeContext);
  const inputRefs = useRef([]);

  const handleEdit = (index, field, value) => {
    mixtapeDispatch({ type: "EDIT", payload: { index, field, value } });
  };
  const navigate = useNavigate();

  const handleFocus = (index) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index].focus();
    }
  };

  return (
    <div className="sidebar-wrapper">
      {mixtapeState.isToggled && (
        <button
          className="toggle-out-button"
          onClick={() => mixtapeDispatch({ type: "TOGGLE" })}
          title="toggle sidebar"
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
                <div className="button-wrapper">
                  <button
                    className="sidebar-button"
                    name="artist"
                    title="edit song"
                    onClick={() => handleFocus(index)}
                  >
                    <MdEdit />
                  </button>
                  <button
                    className="sidebar-button"
                    name="artist"
                    title="delete song"
                    onClick={() =>
                      mixtapeDispatch({ type: "DEL", payload: { song, index } })
                    }
                  >
                    <TiDelete />
                  </button>
                </div>
                <div className="sidebar-inputs">
                  <input
                    type="text"
                    value={decodeHTML(song.title)}
                    ref={(el) => (inputRefs.current[index] = el)}
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
              title="listen"
              onClick={() => navigate("/listen")}
            >
              <FaPlay />
            </button>
            <button
              className="sidebar-button"
              title="share"
              onClick={() => navigate("/share")}
            >
              <FaShareNodes />
            </button>
            <button
              className="sidebar-button"
              title="delete all"
              onClick={() => mixtapeDispatch({ type: "DELALL" })}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
