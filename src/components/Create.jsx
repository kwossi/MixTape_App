import React, { useContext } from "react";
import CreateFirst from "./CreateFirst";
import { TapeContext } from "../store/TapeContext";
import YoutubeSearch from "./YoutubeSearch";
import Sidebar from "./Sidebar";
import ImportMixtape from "./ImportMixtape";

const Create = () => {
  const { mixtapeState } = useContext(TapeContext);
  return (
    <div className="create-container">
      <h1>Create your playlist </h1>
      <p>Or import a mixtape</p>
      <ImportMixtape />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quos
        natus et repudiandae accusamus dolores.
      </p>
      {mixtapeState.name && mixtapeState.creator ? (
        <YoutubeSearch />
      ) : (
        <CreateFirst />
      )}
      <Sidebar />
    </div>
  );
};

export default Create;
