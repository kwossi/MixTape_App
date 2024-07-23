import React, { useContext } from "react";
import CreateFirst from "./CreateFirst";
import { TapeContext } from "../store/TapeContext";
import YoutubeSearch from "./YoutubeSearch";
import ImportMixtape from "./ImportMixtape";

const Create = () => {
  const { mixtapeState, mixtapeDispatch } = useContext(TapeContext);
  return (
    <div className="create-container">
      <h1>Create your mixtape </h1>
      <button
        className="toggle-button"
        onClick={() => mixtapeDispatch({ type: "TOGGLE" })}
      >
        {mixtapeState.isToggled ? "Hide Mixtape" : "Show Mixtape"}
      </button>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quos
        natus et repudiandae accusamus dolores.
      </p>
      {mixtapeState.name && mixtapeState.creator ? (
        <YoutubeSearch />
      ) : (
        <>
          <h3>Create your own</h3>
          <CreateFirst />
          <h3>Or import a mixtape</h3>
          <ImportMixtape />
        </>
      )}
    </div>
  );
};

export default Create;
