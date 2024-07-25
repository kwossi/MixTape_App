import React, { useContext } from "react";
import CreateFirst from "./CreateFirst";
import { TapeContext } from "../store/TapeContext";
import YoutubeSearch from "./YoutubeSearch";
import ImportMixtape from "./ImportMixtape";
import { FaAnglesLeft } from "react-icons/fa6";

const Create = () => {
  const { mixtapeState, mixtapeDispatch } = useContext(TapeContext);
  return (
    <div className="create-container">
      <h1>Create your mixtape </h1>
      {!mixtapeState.isToggled && (
        <button
          className="toggle-button"
          onClick={() => mixtapeDispatch({ type: "TOGGLE" })}
        >
          <FaAnglesLeft />
        </button>
      )}

      {mixtapeState.name && mixtapeState.creator ? (
        <YoutubeSearch />
      ) : (
        <div className="create-options">
          <div>
            <h2>Fresh start</h2>
            <CreateFirst />
          </div>
          <div>
            <h2>Or import</h2>
            <ImportMixtape />
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
