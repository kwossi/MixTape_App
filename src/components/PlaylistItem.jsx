import React, { useContext } from "react";
import { TapeContext } from "../store/TapeContext";

const PlaylistItem = () => {
  const { mixtapeState } = useContext(TapeContext);
  return (
    <div>
      <p></p>
    </div>
  );
};

export default PlaylistItem;
