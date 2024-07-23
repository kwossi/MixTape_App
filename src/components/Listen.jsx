import React, { useContext, useEffect } from "react";
import Player from "./Player";
import { useLocation } from "react-router-dom";
import { TapeContext } from "../store/TapeContext";

const Listen = () => {
  const { mixtapeState, mixtapeDispatch } = useContext(TapeContext);
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/listen") {
      mixtapeDispatch({ type: "HIDE" });
    }
  }, [location]);

  return (
    <div>
      <h1>Listen</h1>
      <p>Listen to your mixtape now.</p>
      <Player />
    </div>
  );
};

export default Listen;
